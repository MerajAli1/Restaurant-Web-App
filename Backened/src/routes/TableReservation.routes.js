import { Router } from "express";
import {
  DelTableData,
  GetTableData,
  TableData,
} from "../controllers/TableReservation.controller.js";

const router = Router();

router.route("/tableData").post(TableData);
router.route("/getTableData").get(GetTableData);
router.route("/delTableData").delete(DelTableData);

export default router;
