// import express from "express";
const express = require("express");
// import morgan from "morgan";
const morgan = require("morgan");
// import cors from "cors";
const cors = require("cors");
// import dotenv from "dotenv";
require("dotenv").config();

// import contactsRouter from "./routes/contactsRouter.js";
const contactsRouter = require("./routes/contactsRouter.js");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// export default { app };
module.exports = app;
