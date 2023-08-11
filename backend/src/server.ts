import "dotenv/config";
import express from "express";
const app = express();
import { connect } from "./database/mongoose";
import { router } from "./routes/router";
import cors from "cors";
connect();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("[Server] => Server is running on port 3000...");
});
