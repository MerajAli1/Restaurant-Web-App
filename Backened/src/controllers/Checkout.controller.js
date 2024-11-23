import { Checkout } from "../models/Checkout.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const CheckoutData = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    paymentMethod,
    address,
    addToCart,
  } = req.body;
  try {
    if (!(firstName && lastName && email && phoneNumber && paymentMethod && address)) {
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
      addToCart,
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

export { CheckoutData, GetCheckoutData, DelCheckoutData };
