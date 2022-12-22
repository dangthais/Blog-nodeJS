import express from 'express';
import { addCate, listCate, readCate, removeCate, updateCate } from '../controller/category';

const router = express.Router()

router.get("/api/listCategory", listCate)
router.get("/api/category/:id", readCate)
router.post("/api/addCategory", addCate)
router.put("/api/updateCategory/:id", updateCate)
router.delete("/api/removeCategory/:id", removeCate)

export default router