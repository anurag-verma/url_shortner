import ShortUrl from "../models/shortUrl.model.js";


export const getUserAllUrls = async (id) => {
    return await ShortUrl.find({user:id}).sort({ createdAt: -1 });
};