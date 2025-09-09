import express from "express";
import {
  getPrizes,
  addPrize,
  deletePrize,
  updatePrize,
  getAllUsers,
  deleteUser,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/prize", addPrize);
router.get("/prize", getPrizes);
router.delete("/prize/:id", deletePrize);
router.put("/prize/:id", updatePrize);

router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

export default router;
