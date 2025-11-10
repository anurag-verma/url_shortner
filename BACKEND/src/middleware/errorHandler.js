// Async wrapper to forward errors from async route handlers to Express error middleware
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Centralized error-handling middleware
export const errorHandler = (err, req, res, next) => {
  // Log structured error info (server-side only)
  console.log(`[ERROR] ${err.status || 500} - ${err.message}`);
  if (process.env.NODE_ENV !== 'production') {
    console.log('Request:', {
      method: req.method,
      path: req.path,
      body: req.body
    });
  }

  const status = err.status || 500;
  const payload = {
    success: false,
    message: err.message || 'Internal Server Error',
  };

  // Stack is intentionally not sent to clients for security.
  // To include stack in responses (only for debugging), set SHOW_STACK=true in environment.
  if (process.env.SHOW_STACK === 'true') payload.stack = err.stack;

  res.status(status).json(payload);
};

export default errorHandler;
