import { Router, Request, Response } from "express";

const router = Router();

// Category routes will be implemented here
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get categories endpoint" });
});

export default router;