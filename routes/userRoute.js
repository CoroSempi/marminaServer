import express from "express";
import { form, spinTheWheel } from "../controllers/userController.js";

const router = express.Router();

router.post("/form", form);
router.get("/spinTheWheel/:id", spinTheWheel);

export default router;
