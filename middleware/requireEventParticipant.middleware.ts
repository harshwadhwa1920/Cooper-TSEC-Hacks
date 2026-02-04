import type { Request, Response, NextFunction } from "express";
import db from "../db";

export const requireEventParticipant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const eventId = Number(req.params.eventId);
  const userId = req.user!.id;

  const [rows]: any = await db.query(
    "SELECT 1 FROM event_participants WHERE event_id = ? AND user_id = ?",
    [eventId, userId]
  );

  if (!rows.length) {
    return res.status(403).json({ message: "Not a participant" });
  }

  next();
};
