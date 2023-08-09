import express, { Router } from "express";
const router = express.Router();

import {
  AllUsers,
  deleteUser,
  infoUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyTokenAllRole } from "../middleware/verifyTokenAllRole.js";
import uploadProfleUser from "../middleware/uploadProfileUser.js";

//POST
router.post("/users", AllUsers);

//UPDATE
router.put("/users/:id",uploadProfleUser, updateUser);

//GET
router.get("/me/:email", verifyTokenAllRole, infoUser);

//DELETE
router.delete("/users/:id", deleteUser);

export default router;
