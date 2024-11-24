import { Router } from "express";
import {
  AcceptedOrder,
  AcceptedReservation,
  RejectedOrder,
  RejectedReservation,
} from "../controllers/Email.controller.js";

const router = Router();
//Integrated On frontend TotalOrder.jsx Component
router.route("/acceptedOrder/:id").post(AcceptedOrder);
//Integrated On frontend TotalOrder.jsx Component
router.route("/rejectedOrder/:id").post(RejectedOrder);
router.route("/acceptedReservation/:id").post(AcceptedReservation);
router.route("/rejectedReservation/:id").post(RejectedReservation);

export default router;
