const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: String,
  endDate: String,
  reason: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);