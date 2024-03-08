import express from 'express';
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product';
const router = express.Router();

router.get(`/products`, getProducts);
router.get(`/api/products/:id`, getProductById);
router.post(`/api/products`, addProduct);
router.delete(`/api/products/:id`, deleteProduct);
router.put(`/api/products/:id`, updateProduct);

export default router;