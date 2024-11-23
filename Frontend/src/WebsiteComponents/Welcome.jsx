import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
      // style={{
      //   height: "120vh",
      //   backgroundImage: `url("https://www.baronmiedzyzdroje.pl/wp-content/uploads/2019/04/background-1.png")`,
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
      >
        <div
          className="text-center"
          style={{
            paddingTop: "200px",
          }}
        >
          <div className="dancing-script">
            <h1>Delicious Experience</h1>
          </div>
          <div className="mt-5 ">
            <h1 style={{ fontSize: "50px" }}>
              " Welcome to{" "}
              <span
                className="jacques-francois-shadow-regular"
                style={{ color: "rgb(295, 150, 0)" }}
              >
                Fresco Restaurant
              </span>{" "}
              "
            </h1>
          </div>
          <div className="mt-5">
            <button
              className="button dancing-script me-5"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
            <button
              className="button dancing-script"
              onClick={() => navigate("/reservation")}
            >
              Reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
