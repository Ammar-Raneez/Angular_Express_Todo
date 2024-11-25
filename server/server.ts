import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import dbConnection from "./config/db";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_URL = `http://localhost`;

const app = express();

// Set security headers
app.use(helmet());

// Enable JSON parsing
app.use(json());

// Only allow the Angular FE from calling this.
const corsOptions = {
  origin: [
    CLIENT_URL,
  ]
}
app.use(cors(corsOptions));

// Industry standard API path.
app.use("/api/v1", todoRoutes);

// Set up logging
app.use(morgan('tiny'));

dbConnection
  .getConnection()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on http://localhost:${SERVER_PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
