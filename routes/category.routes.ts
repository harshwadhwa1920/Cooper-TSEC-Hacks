import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createCategory,
  joinCategory,
  leaveCategory
} from "../controllers/category.controller";

const router = Router();

router.post("/:eventId", authenticate, createCategory);
router.post("/join/:categoryId", authenticate, joinCategory);
router.post("/leave/:categoryId", authenticate, leaveCategory);

export default router;
