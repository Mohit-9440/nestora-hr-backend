const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

    res.json({
      id: user._id,
      name: user.name,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};