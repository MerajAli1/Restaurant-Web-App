import React from "react";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{
          maxWidth: 600,
          margin: "0 auto",
          marginTop: "100px",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <div className="text-center jacques-francois-shadow-regular">
            <div>
              <img
                src="https://www.shutterstock.com/image-vector/green-positive-vote-round-button-600nw-2472913485.jpg"
                alt=""
                width="170px"
                height="160px"
              />
            </div>
            <h2 className="pt-2">Order Placed Successfully!</h2>
            <h5 className="pt-2 text-secondary">
              Thankyou for the placing of order ..
            </h5>
            <h5>Have a great day!</h5>
            <div className="mt-4">
              <button
                className="btn btn-success px-5 py-2 fs-5"
                onClick={() => navigate("/")}
              >
                Go Back
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderSuccess;
