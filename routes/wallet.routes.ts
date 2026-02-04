import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { depositFunds, getWalletBalance } from "../controllers/wallet.controller";

const router = Router();

router.post("/:eventId/deposit", authenticate, depositFunds);
router.get("/:eventId", authenticate, getWalletBalance);

export default router;
