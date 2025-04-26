const express = require('express');
const router = express.Router();
const { applyLeave, getLeaves, updateLeaveStatus } = require('../controllers/leaveController');

router.post('/leaves', applyLeave);
router.get('/leaves', getLeaves);
router.patch('/leaves/:id', updateLeaveStatus);

module.exports = router;