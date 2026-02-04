import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

export const settleEvent = async (req: AuthRequest, res: Response) => {
  res.json({
    eventId: req.params.eventId,
    status: "SETTLED"
  });
};

export const getSettlements = async (req: AuthRequest, res: Response) => {
  res.json({
    settlements: []
  });
};