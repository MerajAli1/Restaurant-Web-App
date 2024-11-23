import { Router } from "express";
import {
  DelTableData,
  GetTableData,
  Reservation,
  TableData,
} from "../controllers/TableReservation.controller.js";

const router = Router();

router.route("/tableData").post(TableData);
router.route("/getTableData").get(GetTableData);
router.route("/delTableData").delete(DelTableData);
router.route("/Acc&RejData").delete(Reservation);

export default router;
