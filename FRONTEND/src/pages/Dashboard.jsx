import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createShortUrl } from '../api/shortUrl.api';
import ShortenedLinks from '../components/ShortenedLinks';
import UserUrls from '../components/UserUrls';
import { QueryClient } from '@tanstack/react-query';

const Dashboard = () => {
    const queryClient = new QueryClient();
    const auth = useSelector((state) => state.auth);
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [links, setLinks] = useState([]);
    
      const addNewLink = (originalUrl, shortUrl) => {
        setLinks(prevLinks => [{
          id: Date.now(),
          original: originalUrl,
          short: shortUrl
        }, ...prevLinks]);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) return alert("Please enter a URL");
        
        try {
          setIsLoading(true);
          const data = await createShortUrl(url);
        //   console.log(data);
          if(data) {
            
            addNewLink(url, data); // Pass both original and shortened URL to parent
            queryClient.invalidateQueries({queryKey: ['userUrls']})
          }
          setUrl("");
        } catch (error) {
          alert("Failed to shorten URL. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
    
    return (
        <div className="flex-1 items-left bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Welcome {auth.user.name}</h1>

            <section className="max-w-4xl mx-auto px-4 mt-8">
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
                        className={`${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                            } text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer`}
                    >
                        {isLoading ? 'Shortening...' : 'Shorten'}
                    </button>
                </form>
                <ShortenedLinks links={links} />
                <UserUrls />
            </section>
            
        </div>
    );
}
export default Dashboard;