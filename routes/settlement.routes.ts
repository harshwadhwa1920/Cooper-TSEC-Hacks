import { Router, Request, Response } from "express";

const router = Router();

// Settlement routes will be implemented here
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get settlements endpoint" });
});

export default router;