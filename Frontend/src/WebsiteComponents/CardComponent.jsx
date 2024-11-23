import { Card, CardContent } from "@mui/material";
import React, { useEffect } from "react";
import Popular from "../Images/Popular.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Store/ProductSlice";
import { addCart } from "../Store/AddToCart";

const CardComponent = () => {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.productReducer);
  // console.log(allProduct);
  // console.log(error);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  // const CardData = [
  //   {
  //     image: Popular,
  //     title: "Spaghetti",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque, sequi natus non assumenda velit.",
  //     price: "12.05",
  //   },
  //   {
  //     image: Popular,
  //     title: "Spaghetti",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque, sequi natus non assumenda velit.",
  //     price: "12.05",
  //   },
  //   {
  //     image: Popular,
  //     title: "Spaghetti",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque, sequi natus non assumenda velit.",
  //     price: "12.05",
  //   },
  //   {
  //     image: Popular,
  //     title: "Spaghetti",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque, sequi natus non assumenda velit.",
  //     price: "12.05",
  //   },
  //   {
  //     image: Popular,
  //     title: "Spaghetti",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque, sequi natus non assumenda velit.",
  //     price: "12.05",
  //   },
  //   {
  //     image: Popular,
  //     title: "Spaghetti",
  //     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque, sequi natus non assumenda velit.",
  //     price: "12.05",
  //   },
  // ];

  return (
    <div className="container">
      <div className="row">
        {allProduct.map((data, index) => {
          return (
            <div key={index} className="col-12 col-md-4">
              <div
                style={{
                  border: "2px solid #fff",
                  borderRadius: "50px",
                  marginTop: "50px",
                  backgroundColor: "#fff",
                  boxShadow: "5px 5px 0px 0px rgb(295, 150, 0)",
                }}
              >
                <div className="text-center pt-4">
                  <img
                    style={{ borderRadius: "100px" }}
                    src={data.image}
                    height={250}
                    width={250}
                    alt={data.title}
                  />
                  <h2 className="jacques-francois-shadow-regular pt-4">
                    {data.title.substring(0, 14)}...
                  </h2>
                  <p
                    className="pt-3"
                    style={{ fontSize: "17px", fontWeight: "lighter" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, laudantium?
                  </p>
                  <div className="d-flex justify-content-around pb-5 pt-4 ">
                    <h3 className="pt-2 fw-bold">$12.05</h3>
                    <button
                      className="button"
                      onClick={() => dispatch(addCart(data))}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
