import React from "react";
import chef1 from "../Images/chef1.png";
import Emad from "../Images/Emad.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PopularChef = () => {
  const chefData = [
    {
      image: chef1,
      name: "Emad",
      status: "Head Chef",
    },
    {
      image: chef1,
      name: "Emad",
      status: "Head Chef",
    },
    {
      image: chef1,
      name: "Emad",
      status: "Head Chef",
    },
  ];

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <section className="row">
          <div className="col-12">
            <div className="text-center">
              <h1
                className="jacques-francois-shadow-regular"
                style={{ fontSize: "60px", wordSpacing: "25px" }}
              >
                Our Popular Chef
              </h1>
            </div>
          </div>

          {chefData.map((data, index) => {
            return (
              <div key={index} className="col-12 col-md-4">
                <div
                  style={{
                    // border: "2px solid #fff",
                    borderRadius: "50px",
                    marginTop: "50px",
                    // backgroundColor: "#fff",
                    // boxShadow: "5px 5px 0px 0px rgb(295, 150, 0)",
                  }}
                >
                  <div className="text-center pt-4">
                    <img
                      style={{
                        backgroundColor: "rgb(295, 150, 0)",
                      }}
                      className=" rounded-pill"
                      src={data.image}
                      height="600px"
                      width="100%"
                      alt={data.name}
                    />
                    <h1 className="jacques-francois-shadow-regular pt-4">
                      {data.name}
                    </h1>
                    <p
                      className="pt-3"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bolder",
                        color: "grey",
                      }}
                    >
                      {data.status}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-12 mt-5">
            <div className="text-center ">
              <button
                className="button dancing-script px-5 py-3 fs-3"
                // style={{ fontSize: "25px" }}
              >
                View all <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularChef;
