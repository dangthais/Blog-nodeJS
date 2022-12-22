import express from "express";
import { register, signing } from "../controller/user";

const router = express.Router();

router.post('/api/signing', signing)
router.post('/api/register', register)

export default router