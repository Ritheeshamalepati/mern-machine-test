// Sample content for routes/agentRoutes.js
const express = require('express');
const router = express.Router();
const { addAgent } = require('../controllers/agentController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/agents/add
router.post('/add', authMiddleware, addAgent);

module.exports = router;
