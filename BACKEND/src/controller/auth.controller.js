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
    console.log('Login attempt for email:', email);
    
    const {token, user} = await loginUser(email, password);
    console.log('Login successful, user:', user._id);
    console.log('Generated token:', token);
    
    // Convert the Mongoose document to a plain JavaScript object
    const userObject = user.toObject(); 
    delete userObject.password;
    
    // Set multiple cookies with different settings for redundancy
    res.cookie('accessToken', token, {
        ...cookieOptions,
        sameSite: 'lax',
        secure: false
    });
    
    // Also set a non-httpOnly cookie that JS can access as backup
    res.cookie('authStatus', 'true', {
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
        sameSite: 'lax',
        secure: false
    });
    
    console.log('Cookies set with token');
    
    res.status(200).json({
        user: userObject,
        token,
        message: 'User logged in successfully'
    });
}
