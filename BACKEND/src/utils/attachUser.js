import { getUserById } from "../dao/auth_user.js";
import { verifyJwtToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) {
        req.user = null;
        return next();
    }
    try {
        const decoded = verifyJwtToken(token);
        const user = await getUserById(decoded);
        req.user = user;
        next();
    } catch (error) {
        req.user = null;
        next();
    }
};