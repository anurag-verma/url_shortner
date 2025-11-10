// components/ShortenedLinks.jsx
import { useState, useRef, useEffect } from "react";

export default function ShortenedLinks({ links = [] }) {
  // Track copied state per link id
  const [copiedMap, setCopiedMap] = useState({});
  const timeoutsRef = useRef({});

  useEffect(() => {
    return () => {
      // Clear any pending timeouts on unmount
      Object.values(timeoutsRef.current).forEach((t) => clearTimeout(t));
      timeoutsRef.current = {};
    };
  }, []);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMap((prev) => ({ ...prev, [id]: true }));

      // Clear any existing timeout for this id
      if (timeoutsRef.current[id]) clearTimeout(timeoutsRef.current[id]);

      // Reset the copied state after 2.5 seconds
      const t = setTimeout(() => {
        setCopiedMap((prev) => {
          const next = { ...prev };
          delete next[id];
          return next;
        });
        delete timeoutsRef.current[id];
      }, 2500);
      timeoutsRef.current[id] = t;
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      alert("Failed to copy to clipboard. Please copy manually.");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Recently Shortened</h3>
      <div className="space-y-4">
        {links.map((link) => {
          const isCopied = !!copiedMap[link.id];
          return (
            <div
              key={link.id}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="truncate max-w-md">
                <p className="text-gray-600 text-sm truncate">{link.original}</p>
                <a
                  href={link.short}
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.short}
                </a>
              </div>
              <button
                onClick={() => handleCopy(link.id, link.short)}
                disabled={isCopied}
                className={`mt-2 sm:mt-0 px-4 py-1.5 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
                  isCopied
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                aria-pressed={isCopied}
              >
                {isCopied ? "Copied!" : "Copy"}
                <span className="sr-only" aria-live="polite">
                  {isCopied ? "Copied to clipboard" : ""}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
