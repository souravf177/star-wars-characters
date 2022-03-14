import express from "express";
import { character_details } from "../controllers/CharacterController.js";

const router = express.Router({ mergeParams: true });

router.get("/:id", character_details);

export default router;
