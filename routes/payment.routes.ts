import { Router, Request, Response } from "express";

const router = Router();

// Payment routes will be implemented here
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get payments endpoint" });
});

export default router;