import { Router } from "express";
import {
  AcceptedOrder,
  AcceptedReservation,
  RejectedOrder,
  RejectedReservation,
} from "../controllers/Email.controller.js";

const router = Router();

router.route("/acceptedOrder:id").post(AcceptedOrder);
router.route("/rejectedOrder:id").post(RejectedOrder);
router.route("/acceptedReservation:id").post(AcceptedReservation);
router.route("/rejectedReservation:id").post(RejectedReservation);

export default router;
