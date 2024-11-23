import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

const Reservation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "1000px", // Sets a max-width for larger screens
            margin: "0 auto",
            padding: "10px",
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <h1
              className="d-flex justify-content-start fw-bold jacques-francois-shadow-regular"
              style={{ fontSize: "42px", color: "rgb(295, 150, 0)" }}
            >
              Table Reservation
            </h1>
            <hr
              style={{
                height: "3px",
                color: "black",
                backgroundColor: "black",
              }}
            />

            {/* buttons */}
            <div className="d-flex justify-content-between jacques-francois-shadow-regular">
              <h1
                className="fw-bold pt-2 jacques-francois-shadow-regular"
                style={{ fontSize: "30px" }}
              >
                Total Tables :{" "}
                <span style={{ color: "rgb(295, 150, 0)" }}>5</span>
              </h1>

              <Grid item xs={5}>
                <TextField
                  label="Search"
                  placeholder="Reservor Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
            </div>
            <hr
              style={{
                height: "3px",
                borderWidth: "0",
                color: "black",
                backgroundColor: "black",
              }}
            />

            {/* Table */}
            <div
              style={{
                marginTop: "10px",
                maxHeight: "220px",
                overflowY: "auto",
              }}
            >
              <table className="table table-striped ">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col"> Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Day</th>
                    <th scope="col">Time</th>
                    <th scope="col" className="text-center">
                      Status
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="pt-3">
                      1
                    </th>
                    <td className="pt-3">Emad Ali Khan</td>
                    <td className="pt-3">emadalikhan5@gmail.com</td>
                    <td className="pt-3"> 20-1-2024</td>
                    <td className="pt-3"> Monday</td>
                    <td className="pt-3">23:22:54</td>
                    <td className="pt-2">
                      <button className="btn btn-success">Accepted</button>
                      <button className="btn btn-danger ms-1">Rejected</button>
                    </td>
                    <td className="pt-2">
                      {" "}
                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                          marginLeft: "10px", // Add some spacing between the buttons
                        }}
                      >
                        <DeleteIcon className="text-danger" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 28px;
            }
            .table th, .table td {
              font-size: 14px;
              padding: 8px;
            }
            .btn {
              font-size: 12px;
              
            }
          }
        `}
      </style>
    </>
  );
};

export default Reservation;
