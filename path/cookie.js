const cookieSession = require('cookie-session');

const sessionMiddleware = cookieSession({
  name: 'session',
  keys: ['your-secret-key'],
  // maxAge: 24 * 60 * 60 * 1000, // 24 hours
  maxAge: 15 * 60 * 1000, // 15 minutes
});

module.exports = sessionMiddleware;