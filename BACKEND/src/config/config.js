export const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to false for local development
    sameSite: 'lax', // Changed to lax for cross-origin requests
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: '/', // Ensure cookie is available for all paths
    domain: 'localhost' // Explicitly set domain
};