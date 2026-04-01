// generateSecret.js
const crypto = require('crypto');

// Generate a random secret key
const secret = crypto.randomBytes(64).toString('hex');

// Log the generated secret
console.log(`Your new JWT secret is: ${secret}`);
