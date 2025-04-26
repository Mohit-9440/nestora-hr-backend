import express from "express";
import { applyLeave, getMyLeaves, getAllLeaves, updateLeaveStatus } from "../controllers/leaveController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/apply", protect, applyLeave);
router.get("/my", protect, getMyLeaves);
router.get("/", protect, getAllLeaves);
router.patch("/:id", protect, updateLeaveStatus);

export default router;