import { Router } from "express";
import {
  DelTableData,
  GetTableData,
  Reservation,
  TableData,
} from "../controllers/TableReservation.controller.js";

const router = Router();
// Integrated on Fronted side in WebsiteComponents/ReservationData.jsx
router.route("/tableData").post(TableData);
//Integrated on Fronted side in WebsiteComponents/ReservationData.jsx
router.route("/getTableData").get(GetTableData);
//Integrated on Fronted side in WebsiteComponents/ReservationData.jsx
router.route("/delTableData/:id").delete(DelTableData);
router.route("/Acc&RejData/:id").delete(Reservation);

export default router;
