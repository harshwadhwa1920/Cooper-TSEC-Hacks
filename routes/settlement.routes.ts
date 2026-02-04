import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { settleEvent, getSettlements } from "../controllers/settlement.controller";

const router = Router();

router.post("/:eventId/settle", authenticate, settleEvent);
router.get("/:eventId", authenticate, getSettlements);

export default router;
