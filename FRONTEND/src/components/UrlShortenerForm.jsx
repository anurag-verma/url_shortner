// components/UrlShortenerForm.jsx
import axios from "axios";
import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api.js";

export default function UrlShortenerForm({ onShorten }) {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return alert("Please enter a URL");
    
    try {
      setIsLoading(true);
      const data = await createShortUrl(url);
    //   console.log(data);
      if(data) {
        
        onShorten(url, data); // Pass both original and shortened URL to parent
      }
      setUrl("");
    } catch (error) {
      alert("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 flex gap-3"
    >
      <input
        type="url"
        placeholder="Enter your long URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`${
          isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        } text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer`}
      >
        {isLoading ? 'Shortening...' : 'Shorten'}
      </button>
    </form>
  );
}
