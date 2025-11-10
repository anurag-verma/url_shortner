import User from "../models/user.model.js";


export const getUserByEmail = async (email) => {
    return await User.findOne({email});
};

export const getUserById = async (id) => {
    return await User.findById(id);
};

export const createUser = async (name, email, password) => {
    const newUser = new User({name,email,password});
    return await newUser.save();
}
