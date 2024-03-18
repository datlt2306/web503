import express from "express";
import {
    addProduct,
    getProductById,
    getProducts,
    removeProduct,
    updateProduct,
} from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", checkAuth, addProduct);
router.delete("/products/:id", removeProduct);
router.put("/products/:id", updateProduct);

export default router;
