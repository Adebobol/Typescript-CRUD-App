import express from "express";
import http from "http";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose, { connect } from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyparser.json());

const server = http.createServer(app);
server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});

const MONGO_URL = "mongodb://127.0.0.1/typescript-crud";

// mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
// mongoose.connection.on("error", (error: Error) => console.log(error));

mongoose
  .connect(MONGO_URL, {})
  .then(() => console.log("DB connection successful"));
