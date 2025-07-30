// Sample content for middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
module.exports = function (req, res, next) {
  // Get token from headers
  const token = req.header('Authorization');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to request object
    req.user = decoded;

    // Continue to the next middleware/controller
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
