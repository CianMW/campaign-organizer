import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import documentRouter from "./services/documents/index.js";
import 'dotenv/config'
// import {
//   badRequestHandler,
//   unauthorizedHandler,
//   notFoundHandler,
//   genericErrorHandler,
// } from "./errorHandlers.js";

const { MONGO_CONNECTION, PORT } = process.env;

const server = express();
const port = process.env.PORT || 3001;

const whitelist = ["http://localhost:3000", "https://localhost:3000"];

const corsOptions = {
  origin: function (origin, next) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      next(null, true);
    } else {
      next(new Error("CROSS ORIGIN ERROR"));
    }
  },
  credentials: true,
};

// ******************************** MIDDLEWARE ********************************
server.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Accept",
      "Origin",
      "X-Requested-With",
      "Authorization",

    ],
  })
);

server.use(express.json());

// ******************************** ROUTES ********************************

server.use("/documents", documentRouter);

// ******************************** ERROR HANDLERS ********************************

// server.use(badRequestHandler);
// server.use(unauthorizedHandler);
// server.use(notFoundHandler);
// server.use(genericErrorHandler);

// ******************************** DB CONNECTION ********************************

mongoose.connect(MONGO_CONNECTION);

mongoose.connection.on("connected", () => {
  console.log("📊 Mongo Connected❗️");
  server.listen(PORT, () => {
    console.table(listEndpoints(server));
    console.log(`Server running in port ${port} 📍`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log("ERROR WITH DB--------->❗️", err);
});