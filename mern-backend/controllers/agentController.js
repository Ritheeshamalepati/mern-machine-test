// Sample content for controllers/agentController.js
const Agent = require('../models/Agent');
const bcrypt = require('bcryptjs');

// Add Agent
exports.addAgent = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    // Check if agent already exists
    const existing = await Agent.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'Agent already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create agent
    const agent = new Agent({
      name,
      email,
      mobile,
      password: hashedPassword
    });

    await agent.save();
    res.status(201).json({ msg: 'Agent created successfully', agent });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
