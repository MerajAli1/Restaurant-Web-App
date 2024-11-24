import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Base_URL/BASE_URL";
const ReservationData = ({ modal, setModal, date, time, size, day }) => {
  const [detail, setDetail] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [occassion, setOccassion] = useState("");
  const [request, setRequest] = useState("");

  const navigate = useNavigate();

  const Confirmation = (e) => {
    e.preventDefault();

    if (!(fullName && phoneNumber && email && request)) {
      alert("fill all the fields...");
    }
    setDetail(true);
  };

  const ResvationComplete = (e) => {
    e.preventDefault();

    const ReservatinData = {
      fullName,
      phoneNumber:parseInt(phoneNumber),
      email,
      occassion,
      request,
      ReservationDate: date,
      ReservationDay: day,
      ReservationTime: time,
      partySize: size,
    };
    console.log('ReservatinData==>', ReservatinData);
    
    // try {
    //   const res = axios.post(`${BASE_URL}/tableData`, {
    //     fullName,
    //     phoneNumber,
    //     email,
    //     occassion,
    //     request,
    //     ReservationDate: date,
    //     ReservationDay: day,
    //     ReservationTime: time,
    //     partySize: size,
    //   },
    // {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    //   console.log("res==>", res);
    // } catch (error) {
    //   console.log("error==>", error);
    // }
  };

  return (
    <>
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          {detail ? (
            <h1
              className="jacques-francois-shadow-regular"
              style={{ color: "rgb(295, 150, 0)" }}
            >
              Reservation Detail
            </h1>
          ) : (
            <h1 className="jacques-francois-shadow-regular">Data Order</h1>
          )}
        </ModalHeader>
        <ModalBody>
          {detail ? (
            <div className="playfair-display">
              <div className="pt-3 fs-4 ps-5 pb-5 fw-bold">
                <p>
                  {" "}
                  <CalendarMonthIcon
                    className="fs-1"
                    style={{ color: "rgb(295, 150, 0)" }}
                  />{" "}
                  <span className="ps-2">
                    {day} {date}
                  </span>
                </p>
                <p>
                  <AccessTimeIcon
                    className="fs-1"
                    style={{ color: "rgb(295, 150, 0)" }}
                  />
                  <span className="ps-3">{time}</span>
                </p>
                <p>
                  {" "}
                  <PermIdentityIcon
                    className="fs-1"
                    style={{ color: "rgb(295, 150, 0)" }}
                  />{" "}
                  <span className="ps-2">{size} people (Standar seating)</span>
                </p>
                <div className="pt-4">
                  <button className="button py-3 " onClick={ResvationComplete}>
                    Confirm Reservation
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={Confirmation}>
              <Row>
                <div className="d-flex flex-column">
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    style={{
                      padding: "10px",
                      marginBottom: "10px",
                      background: "transparent",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid rgb(295, 150, 0)",
                      fontSize: "15px",
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Phone No."
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    style={{
                      padding: "10px",
                      marginBottom: "10px",
                      background: "transparent",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid rgb(295, 150, 0)",
                      fontSize: "15px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      padding: "10px",
                      marginBottom: "10px",
                      background: "transparent",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid rgb(295, 150, 0)",
                      fontSize: "15px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Select an Occasion"
                    onChange={(e) => setOccassion(e.target.value)}
                    style={{
                      padding: "10px",
                      marginBottom: "10px",
                      background: "transparent",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid rgb(295, 150, 0)",
                      fontSize: "15px",
                    }}
                  />
                  <textarea
                    placeholder="Add a special Request.."
                    rows={3}
                    onChange={(e) => setRequest(e.target.value)}
                    style={{
                      padding: "10px",
                      marginBottom: "10px",
                      background: "transparent",
                      width: "100%",
                      borderRadius: "10px",
                      border: "2px solid rgb(295, 150, 0)",
                      fontSize: "15px",
                    }}
                  />
                  <button className="button py-2 fs-4" type="submit">
                    Reservation
                  </button>
                </div>
              </Row>
            </form>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ReservationData;
