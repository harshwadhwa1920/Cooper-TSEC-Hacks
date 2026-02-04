import { Router, Request, Response } from "express";

const router = Router();

// Auth routes will be implemented here
router.post("/register", (req: Request, res: Response) => {
  res.status(200).json({ message: "Register endpoint" });
});

router.post("/login", (req: Request, res: Response) => {
  res.status(200).json({ message: "Login endpoint" });
});

export default router;