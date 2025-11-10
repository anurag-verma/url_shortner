import { useState, useRef, useEffect } from "react";
import {useQuery} from '@tanstack/react-query';
import {getUserAllUrls} from '../api/user.api';

export default function userUrls(){
    const {data: urls, isLoading, isError, error} = useQuery({
        queryKey: ['userUrls'],
        queryFn: getUserAllUrls,
        refetchInterval: 3000,
        staleTime: 0
    });
    console.log("User URLs Data: ", urls);
    const [copiedId, setCopiedId] = useState(null);
    const handleCopy = (shortUrl, id) => {
        navigator.clipboard.writeText(shortUrl);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
    };

    if (isLoading) {
        return <div className="p-4">Loading...</div>;
    }
    if (isError) {
        return <div className="p-4">Error loading URLs.</div>;
    }

    if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="text-center text-gray-500 my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <p className="text-lg font-medium">No URLs found</p>
        <p className="mt-1">You haven't created any shortened URLs yet.</p>
      </div>
    )
  }
    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Your Shortened URLs</h3>
            <div className="space-y-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Original URL
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Short URL
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
                {urls.urls.map((url) => (
                   <tr key={url._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                        <div className="truncate max-w-md">
                            <p className="text-gray-600 text-sm truncate">{url.originalUrl}</p>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                            <a
                                href={`http://localhost:3000/${url.short_url}`}
                                className="text-blue-600 font-medium hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`http://localhost:3000/${url.short_url}`}
                            </a>
                       </td>
                       <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
                            </span>
                        </div>
                        </td>
                       <td>
                        <button
                            onClick={() => handleCopy(`http://localhost:3000/${url.short_url}`, url._id)}
                            className={`mt-2 sm:mt-0 px-4 py-2 rounded-lg font-semibold transition-colors ${
                                copiedId === url._id
                                    ? 'bg-green-500 text-white cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                            disabled={copiedId === url._id}
                        >
                            {copiedId === url._id ? 'Copied!' : 'Copy'}
                        </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}