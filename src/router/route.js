import express from 'express';
import { add, list, read, remove, update } from '../controller/controller';

const router = express.Router()

router.get("/api/listPost", list)
router.get("/api/post/:id", read)
router.post("/api/addPost", add)
router.put("/api/updatePost/:id", update)
router.delete("/api/removePost/:id", remove)

export default router
