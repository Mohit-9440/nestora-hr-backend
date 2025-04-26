const LeaveRequest = require('../models/LeaveRequest');

exports.applyLeave = async (req, res) => {
  const { userId, startDate, endDate, reason } = req.body;
  try {
    const leave = await LeaveRequest.create({ userId, startDate, endDate, reason });
    res.json(leave);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLeaves = async (req, res) => {
  try {
    const leaves = await LeaveRequest.find().populate('userId', 'name email');
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateLeaveStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const leave = await LeaveRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(leave);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};