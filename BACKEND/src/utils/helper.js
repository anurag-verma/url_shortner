import { nanoid } from "nanoid"
import jwt from "jsonwebtoken";

export const generateNanoId = (length) =>{
    return nanoid(length);
}

export const jwtToken = (userId) => {
    return jwt.sign(userId, process.env.JWT_SECRET, {expiresIn: '1h'});
}

export const verifyJwtToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
}