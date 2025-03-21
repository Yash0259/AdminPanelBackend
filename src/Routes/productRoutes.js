import express from "express";
import { getAllProducts, addProduct, updateProduct, deleteProduct } from "../Controllers/productController.js";
import upload from "../Middleware/multer.js"; // Add .js extension

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", upload.array("images", 5), addProduct);
router.put("/:id", upload.array("images", 5), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
