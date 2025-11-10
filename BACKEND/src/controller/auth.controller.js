import { cookieOptions } from "../config/config.js";
import { loginUser, registerUser } from "../services/auth.service.js";


export const register_user = async (req, res) => {

    const { name, email, password } = req.body;

    const token = await registerUser(name, email, password);
    res.cookie('accessToken', token, cookieOptions);
    res.status(200).json({token, message: 'User registered successfully' });
}

export const login_user = async (req, res) => {
    const { email, password } = req.body;
    const {token, user} = await loginUser(email, password);
    // console.log("Login_user: "+user);
    res.user = user;
    // Convert the Mongoose document to a plain JavaScript object first
    const userObject = user.toObject(); 

    // Now delete the property from the plain object
    delete userObject.password; 
    // const userData = {userEmail: user.email, userName: user.name, userId: user._id};
    res.cookie('accessToken', token, cookieOptions);
    res.status(200).json({user: userObject, message: 'User logged in successfully' });
}
