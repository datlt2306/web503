import express from "express";
import productRouter from "./routers/product.router";
import authRouter from './routers/auth.router';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/", productRouter);
app.use("/api/", authRouter);
export const viteNodeApp = app;
