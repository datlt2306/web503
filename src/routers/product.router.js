import express from "express";
import {
    addProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,
} from "../controllers/product";
const router = express.Router();

router.get(`/products`, getProducts);
router.get(`/products/:id`, getProductById);
router.post(`/products`, addProduct);
router.delete(`/products/:id`, deleteProduct);
router.put(`/products/:id`, updateProduct);

export default router;
