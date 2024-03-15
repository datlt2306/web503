import express from "express";
import productRouter from "./routers/product.router";
import authRouter from "./routers/auth.router";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Database
async function connectDB(uri) {
    try {
        await mongoose.connect(uri);
        console.log(`Keets noois thanh cong`);
    } catch (error) {
        console.log(`Keets noois that bai`);
    }
}

// Routers
app.use("/api/", productRouter);
app.use("/api/", authRouter);

mongoose.connect(`mongodb://localhost:27017/WD18329`);
export const viteNodeApp = app;
