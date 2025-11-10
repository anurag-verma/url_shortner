import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlService, createUserShortUrlService } from "../services/createShortUrl.service.js";


export const createShortUrl = async(req, res, next)=>{
    try{
    const {url} = req.body;
    let short_url;
    if(req.user){
        console.log("Controller: creating loggedin user short url");
        short_url = await createUserShortUrlService(url,req.user._id);
    }else{
        short_url = await createShortUrlService(url);
    }
    res.status(200).json({shortUrl: process.env.APP_URL+short_url});
    }
    catch(err){
        return next(err);
    }  
}

export const redirectFromShortUrl = async (req, res, next) => {
    try {
        const { shortId } = req.params;
        
        // Input validation
        if (!shortId) {
            const err = new Error('Short URL ID is required');
            err.status = 400;
            return next(err);
        }

        // getShortUrl will throw 404 if not found
        const redirectUrl = await getShortUrl(shortId);
        return res.redirect(redirectUrl);

    } catch (error) {
        // Pass the error to our error handler middleware
        return next(error);
    }
};