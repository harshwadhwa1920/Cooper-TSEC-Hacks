import type { Request, Response, NextFunction } from "express";
import db from "../db";

export const requireEventOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const eventId = Number(req.params.eventId);
  const userId = req.user!.id;

  const [rows]: any = await db.query(
    "SELECT owner_id FROM events WHERE id = ?",
    [eventId]
  );

  if (!rows.length || rows[0].owner_id !== userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};
