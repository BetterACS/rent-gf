const cookieSession = require('cookie-session');

const sessionMiddleware = cookieSession({
  name: 'session',
  keys: ['your-secret-key'],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
});

module.exports = sessionMiddleware;