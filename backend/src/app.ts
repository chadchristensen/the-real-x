import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routes/index.ts";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", indexRouter);

// Error Handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(next);
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err.stack);
  process.exit(1);
});
