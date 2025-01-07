import { Order } from "../models/Acc&RejOrders.js";
import { Checkout } from "../models/Checkout.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51Q47vSG124FIRgpMYy2XfP1PthkORGJdpoYLHnLtq8YZsD3YkyckDXIh2cKas6JwxGvHgVU3oFuHfunyaK5qUqtL00cIlfws6N"
);
const CheckoutData = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    paymentMethod,
    address,
    orderItems,
  } = req.body;
  try {
    if (
      !(
        firstName &&
        lastName &&
        email &&
        phoneNumber &&
        paymentMethod &&
        address
      )
    ) {
      throw new ApiError(400, "All fields are required for placing th order..");
    }
    const checkout = await Checkout.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      paymentMethod,
      address,
      orderItems,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, checkout, "Order placed Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server error, please try again later");
  }
});
const GetCheckoutData = asyncHandler(async (req, res) => {
  try {
    const getCheckout = await Checkout.find({});
    if (!getCheckout) {
      throw new ApiError(400, "Checkout data not Found");
    }
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          getCheckout,
          "Checkout Data retrieve Successfully..."
        )
      );
  } catch (error) {
    throw new ApiError(500, "Server error, please try again later");
  }
});
const DelCheckoutData = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, "Order ID is required... ...");
    }
    const delCheckout = await Checkout.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          delCheckout,
          "Checkout data delete Successfully..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});
//Accepted and rejected Order
const OrderTransfer = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    if (!id) {
      throw new ApiError(400, "Id Not found... ...");
    }
    // finding the data from checkout
    const findOrder = await Checkout.findOne({ _id: id });
    //sending data to the Accepted/Rejected Order
    const orderStatus = await Order.create({
      // OrderData: findOrder,
      status: status,
    });
    //now delete from checkout
    await Checkout.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          orderStatus,
          findOrder,
          "Order send Successfully to Accepted Order and deleted from orders..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});
const paymentMethod = asyncHandler(async (req, res) => {
  const { products } = req.body;
  console.log(products);
  const lineItems = products.map((prd) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: prd.mealName, // Use 'prd' to access the mapped object
      },
      unit_amount: prd.Price, // Convert price to the smallest currency unit
    },
    quantity: prd.count, // Quantity of the product
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success", //frontend url here
    cancel_url: "http://localhost:5173/error", // frontend url here
  });

  res.json({ id: session.id });
});

export {
  CheckoutData,
  GetCheckoutData,
  DelCheckoutData,
  OrderTransfer,
  paymentMethod,
};
