import { getUserById } from "../dao/auth_user.js";
import { verifyJwtToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });
    try {
        const decoded = verifyJwtToken(token);
        const user = await getUserById(decoded.id); // Assuming you have a function to get user by ID
        if (!user) return res.status(401).json({ message: 'Unauthorized: User not found' });
        req.user = user; // Attach user info to request object
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};