import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the Express.js app using TypeScript and ES modules!",
  });
});

export default router;
