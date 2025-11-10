import ShortUrl from "../models/shortUrl.model.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
try{
    const newUrl = new ShortUrl({
            originalUrl: longUrl,
            short_url: shortUrl,
        });
        if(userId){
            newUrl.user = userId;
        }
        await newUrl.save();
    }
    catch(error){
        // Detect Mongo duplicate key error (short_url unique constraint)
        // Mongo duplicate key error code is 11000
        if (error && (error.code === 11000 || error.code === 11001)) {
            const err = new Error('Short URL already exists');
            err.status = 409; // Conflict
            // include original error for debugging if needed
            // err.original = error;
            throw err;
        }

        console.log("DAO-Error in saving short URL: ", error);
        throw error;
    }
}

export const getShortUrl = async (shortId) => {
    try {
        const urlData = await ShortUrl.findOneAndUpdate(
            { short_url: shortId },
            { $inc: { clicks: 1 } },
            { new: true }
        );
        
        if (!urlData) {
            const err = new Error('Short URL not found');
            err.status = 404;
            throw err;
        }
        
        return urlData.originalUrl;
    } catch (error) {
        // If it's already a formatted error (like our 404), rethrow it
        if (error.status) throw error;
        
        // Otherwise wrap DB/unexpected errors
        console.error('DAO-getShortUrl Error:', error);
        const err = new Error('Failed to retrieve URL');
        err.status = 500;
        err.cause = error;
        throw err;
    }
}