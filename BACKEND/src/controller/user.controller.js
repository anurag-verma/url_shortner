import { getUserAllUrls } from "../dao/user_dao.js";

export const getUserUrls = async(req, res, next)=>{
    try{
        const userId = req.user._id;
        // console.log("UserID in Controller: ", req.user._id);
        const userUrls = await getUserAllUrls(userId);
        res.status(200).json({urls: userUrls});
    }  catch(err){
        return next(err);
    }
}

export default getUserUrls;