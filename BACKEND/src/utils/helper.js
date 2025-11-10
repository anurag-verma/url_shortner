import { nanoid } from "nanoid"
import jwt from "jsonwebtoken";

export const generateNanoId = (length) =>{
    return nanoid(length);
}

export const jwtToken = (userId) => {
    // console.log('Creating token for userId:', userId);
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {expiresIn: '1h'});
    // console.log('Generated token:', token);
    return token;
}

export const verifyJwtToken = (token) => {
    // console.log('Verifying token:', token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log('Decoded token:', decoded);
    return decoded.id;
}