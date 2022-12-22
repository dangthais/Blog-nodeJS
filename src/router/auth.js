import express from "express";
import { findUserById, listUser, removeUser, updateUser } from "../controller/auth";
import { verifyToken } from "../middlewares/checkAuth";


const router = express.Router();

router.get('/api/admin/readUser/:userID', findUserById)
router.get('/api/admin/listUser',listUser)
router.delete('/api/admin/removeUser/:userID', removeUser)
router.put('/api/admin/updateUser/:userID', updateUser)


export default router