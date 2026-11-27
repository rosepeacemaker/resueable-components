import express from "express";
import { chatWithAssistant } from "../controllers/assistantController.js";

const router = express.Router();

// AI Assistant chat route
router.post("/chat", chatWithAssistant);

export default router;