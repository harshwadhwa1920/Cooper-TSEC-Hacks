import { Router, Request, Response } from "express";

const router = Router();

// Event routes will be implemented here
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get events endpoint" });
});

export default router;