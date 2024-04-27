import express from 'express';
import cors from "cors";
import routes from "./v1/routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { isDev } from "@skillgap/shared/constants";
import csrfProtection from "csurf";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import winston from "winston";
import expressWinston from "express-winston";

dotenv.config({ path: !isDev ? ".env" : ".env.local" });

// App
const app = express();
const host = process.env.HOST ?? "localhost";
const port = 8080;

// Helmet to set secure HTTP headers
app.use(helmet());

app.use(cors()); // Cross Origin Site requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // COnfigure to accept JSON request body

// CSRF Protection
app.use(cookieParser());
app.use(csrfProtection({ cookie: true }));

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.cli(),
      winston.format.timestamp()
    ),
    meta: true,
  })
);

app.use(process.env.EXPO_PUBLIC_CSRF_TOKEN_PATH as string, (req, res) => {
  res.send({ csrfToken: req.csrfToken() });
});

app.use("/v1", routes);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() =>
    app.listen(port, host, () =>
      console.info(`[ ready ] http://${host}:${port}`)
    )
  )
  .catch((error) => console.error("Error connecting to DB: ", error));
