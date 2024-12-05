import { Data } from "../models/Accepted&RejectedReservations.model.js";
import { Table } from "../models/TableReservation.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import {ApiResponse} from '../utils/ApiResponse.js'
// import nodemailer from "nodemailer";

const TableData = asyncHandler(async (req, res) => {
  const {
    fullName,
    phoneNumber,
    email,
    occassion,
    request,
    ReservationDate,
    ReservationDay,
    ReservationTime,
    partySize,
  } = req.body;

  try {
    // Checking validation
    if (
      !(
        fullName &&
        phoneNumber &&
        email &&
        occassion &&
        request &&
        ReservationDate &&
        ReservationDay &&
        ReservationTime &&
        partySize
      )
    ) {
      throw new ApiError(400, "All Fields are required..!");
    }

    const tableData = await Table.create({
      fullName,
      phoneNumber,
      email,
      occassion,
      request,
      ReservationDate,
      ReservationDay,
      ReservationTime,
      partySize,
    });

    return res
      .status(201)
      .json(new ApiResponse(200, tableData, "Table Data sent Successfully..."));
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      return res.status(400).json(new ApiResponse(400, null, "Duplicate key error"));
    }
    return res.status(500).json(new ApiResponse(500, null, error.message));
  }
});

const GetTableData = asyncHandler(async (req, res) => {
  try {
    const getTableData = await Table.find({});
    if (!getTableData) {
      throw new ApiError(400, "Table Data Not found");
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          getTableData,
          "Table Data retrieve Successfully..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

const DelTableData = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, "Message ID is required... ...");
    }
    const delTableData = await Table.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(200, delTableData, "Tabale data delete Successfully...")
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

// Accepted Reservation
const Reservation = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    if (!id) {
      throw new ApiError(400, "Id Not found... ...");
    }
    // finding the data from table
    const findData = await Table.findOne({ _id: id });
    //sending data to the Accepted Reservation
    const sendData = await Data.create({
      ReservationData: findData,
      status: status,
    });
    //now delete from Table
    await Table.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          sendData,
          "Tabale data send Successfully to Accepted Reservation and deleted from tableReservation..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});
export { TableData, GetTableData, DelTableData, Reservation };
