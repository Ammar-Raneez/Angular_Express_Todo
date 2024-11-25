import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnection from "./config/db";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(json());
app.use(cors());
app.use("/api", todoRoutes);

dbConnection
  .getConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
