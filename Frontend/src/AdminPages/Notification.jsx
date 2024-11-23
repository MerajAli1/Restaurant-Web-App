import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const Notification = () => {
  const [notifications, setNotification] = useState([]);

  return (
    <>
      {/* notifications > 0 ? */}
      <div className="container">
        <Typography
          className="text-center fw-bold jacques-francois-shadow-regular"
          variant="h4"
        >
          <span className="jacques-francois-shadow-regular">
            {" "}
            NOTIFICATIONS
          </span>
        </Typography>
        {/* {console.log(notifications,"notifications")} */}

        <div className="row ">
          <div
            className="col-md-12 text-center border shadow mt-4 p-3 bg-dark text-white "
            style={{ borderRadius: "10px", fontSize: "17px" }}
          >
            <p>
              <b className="jacques-francois-shadow-regular">NAME:</b> Emad Ali
              Khan
            </p>
            <p>
              <b className="jacques-francois-shadow-regular">Email:</b>{" "}
              emadalikhan5@gmail.com
            </p>
            <p>
              <b className="jacques-francois-shadow-regular">Message:</b> Your
              meal is not good
            </p>
            <p>
              <b className="jacques-francois-shadow-regular">Phone Number:</b>{" "}
              03186342262
            </p>
            <button className="button w-100 fw-bold fs-4 ">
              <span className="playfair-display">Delete </span>
            </button>
          </div>
        </div>

        {/* : <h1 className='d-flex justify-content-center align-items-center ' style={{ color: "grey", margin:"80px 0px 80px 0px" }}>N{text}</h1> */}
      </div>
    </>
  );
};

export default Notification;
