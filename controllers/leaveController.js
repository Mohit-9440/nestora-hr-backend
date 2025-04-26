import Leave from "../models/Leave.js";

export const applyLeave = async (req, res) => {
  const { startDate, endDate, reason } = req.body;

  const leave = await Leave.create({
    userId: req.user._id,
    startDate,
    endDate,
    reason,
  });

  res.status(201).json(leave);
};

export const getMyLeaves = async (req, res) => {
  const leaves = await Leave.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(leaves);
};

export const getAllLeaves = async (req, res) => {
  const leaves = await Leave.find().populate("userId", "name email");
  res.json(leaves);
};

export const updateLeaveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const leave = await Leave.findById(id);
  if (!leave) return res.status(404).json({ message: "Leave not found" });

  leave.status = status;
  await leave.save();

  res.json(leave);
};