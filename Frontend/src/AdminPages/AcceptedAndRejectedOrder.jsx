import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Base_URL/BASE_URL";
const AcceptedAndRejectedOrder = () => {
  const [loading, setLoading] = useState(false);
  const [allOrder, setAllOrder] = useState([]);
  const getOrder = async () => {
    setLoading(true)
    try {
      const res = axios.get(`${BASE_URL}/allOrders`);
      setAllOrder(res.data.data)
      console.log(res.data);
      setLoading(true)
    } catch (error) {
      setLoading(true)
      console.log(error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
      <div className="container">
        <section className="row">
          <div className="col-12">
            <div className="text-center">
              <h1
                className="jacques-francois-shadow-regular"
                style={{
                  fontSize: "60px",
                  color: "rgb(295, 150, 0)",
                }}
              >
                Orders Detail
              </h1>
            </div>
          </div>
          <hr />

          {/* Accepted Order */}
          <div
            className="col-12 col-md-6 mb-4"
            style={{
              borderRight: "2px solid #ccc", // Vertical line between sections
              paddingRight: "20px", // Adds space between border and content
            }}
          >
            <h1 className="jacques-francois-shadow-regular text-success text-center">
              Accepted Orders
            </h1>

            <div
              style={{
                marginTop: "20px",
                maxHeight: "350px",
                overflowY: "auto",
              }}
              className="table-responsive" // Responsive table wrapper
            >
              <table className="table table-success table-striped table-bordered border-success">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Day</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="pt-3">
                      1
                    </th>
                    <td className="pt-3">Emad Ali Khan</td>
                    <td className="pt-3">20-1-2024</td>
                    <td className="pt-3">Monday</td>
                    <td className="pt-3">23:22:54</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rejected Order */}
          <div className="col-12 col-md-6 mb-4">
            <h1 className="jacques-francois-shadow-regular text-danger text-center">
              Rejected Orders
            </h1>

            <div
              style={{
                marginTop: "20px",
                maxHeight: "350px",
                overflowY: "auto",
              }}
              className="table-responsive" // Responsive table wrapper
            >
              <table className="table table-danger table-striped table-bordered border-danger">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Day</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="pt-3">
                      1
                    </th>
                    <td className="pt-3">Emad Ali Khan</td>
                    <td className="pt-3">20-1-2024</td>
                    <td className="pt-3">Monday</td>
                    <td className="pt-3">23:22:54</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcceptedAndRejectedOrder;
