import { Router, Request, Response } from "express";

const router = Router();

// Wallet routes will be implemented here
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get wallets endpoint" });
});

export default router;