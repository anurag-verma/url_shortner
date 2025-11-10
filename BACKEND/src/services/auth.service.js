import { createUser, getUserByEmail } from '../dao/auth_user.js';
import { jwtToken } from '../utils/helper.js';
import { HttpError } from '../utils/HttpError.js';


export const registerUser = async (name, email, password) => {
    
    const getUserData = await getUserByEmail(email);
    if (getUserData) throw new HttpError(409, 'User already exists with this email');

    const newUser = await createUser(name, email, password);
    const token = jwtToken({ id: newUser._id });

    return token;
}


export const loginUser = async (email, password) => {
    const user = await getUserByEmail(email);
    // Avoid user enumeration: return same message for both missing user and invalid password
    if (!user || user.password !== password) {
        throw new HttpError(401, 'Invalid email or password');
    }
    const token = jwtToken({ id: user._id });
    return { token, user };
};