import express from "express";
import mailRouter from "./routes/mail.routes.js";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import hpp from "hpp";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(hpp());

app.use("/api/v1/mail", mailRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
});

export { app };
