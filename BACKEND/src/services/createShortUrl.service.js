import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlService = async (url, maxAttempts = 3) => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const short_url = generateNanoId(7);
    try {
      await saveShortUrl(short_url, url);
      return short_url;
    } catch (err) {
      // If duplicate collision, retry by generating a new id
      if (err && (err.status === 409 || err.code === 11000) && attempt < maxAttempts) {
        continue; // try again
      }
      // rethrow for controller/errorHandler to handle
      throw err;
    }
  }
  throw new Error('Failed to create short URL after multiple attempts');
};

export const createUserShortUrlService = async (url, userId, maxAttempts = 3) => {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const short_url = generateNanoId(7);
    try {
      await saveShortUrl(short_url, url, userId);
      return short_url;
    } catch (err) {
      // If duplicate collision, retry by generating a new id
      if (err && (err.status === 409 || err.code === 11000) && attempt < maxAttempts) {
        continue; // try again
      }
      // rethrow for controller/errorHandler to handle
      throw err;
    }
  }
  throw new Error('Failed to create short URL after multiple attempts');


    // try {
    //     const short_url = generateNanoId(7);
    //     await saveShortUrl(short_url, url, userId);
    //     return short_url;
        
    // } catch (error) {
    //     console.log("SERVICE-createUserShortUrlService: ",error);
    //     throw error;
    // }
}