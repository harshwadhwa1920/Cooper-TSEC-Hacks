import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { makePayment, getAllPayments } from "../controllers/payment.controller";

const router = Router();

router.post("/:eventId/pay", authenticate, makePayment);
router.get("/:eventId", authenticate, getAllPayments);

export default router;
