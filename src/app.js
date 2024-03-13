import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routers/auth";
import productRouter from "./routers/product.router";

const app = express();

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/WD18330");

app.use("/api", productRouter);
app.use("/api", authRouter);
export const viteNodeApp = app;
