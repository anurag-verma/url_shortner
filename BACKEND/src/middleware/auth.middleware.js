import { getUserById } from "../dao/auth_user.js";
import { verifyJwtToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    // console.log('Auth Middleware - Token:', token);

    if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });
    try {
        const decoded = verifyJwtToken(token);
        // console.log('Auth Middleware - Decoded token:', decoded);
        
        const user = await getUserById(decoded); // decoded is already the ID from verifyJwtToken
        // console.log('Auth Middleware - Found user:', user);
        
        if (!user) return res.status(401).json({ message: 'Unauthorized: User not found!' });
        req.user = user; // Attach user info to request object
        next();
    } catch (error) {
        // console.error('Auth Middleware - Error:', error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};