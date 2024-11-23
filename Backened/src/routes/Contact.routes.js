import { Router } from "express";
import {
  ContactMessage,
  DeleContactMessage,
  GetContactMessage,
} from "../controllers/Contact.controller.js";

const router = Router();

router.route("/message").post(ContactMessage);
router.route("/getMessage").get(GetContactMessage);
router.route("/deleteMessage/:id").delete(DeleContactMessage);

export default router;
