import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createEvent,
  getAllEvents,
  getEventById,
  joinEvent,
  removeParticipant
} from "../controllers/event.controller";

const router = Router();

router.post("/", authenticate, createEvent);
router.get("/", authenticate, getAllEvents);
router.get("/:eventId", authenticate, getEventById);
router.post("/:eventId/join", authenticate, joinEvent);
router.delete("/:eventId/participants/:userId", authenticate, removeParticipant);

export default router;
