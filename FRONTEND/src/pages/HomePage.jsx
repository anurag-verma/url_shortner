import React, { useState } from 'react'
import HeroSection from "../components/HeroSection";
import UrlShortenerForm from "../components/UrlShortenerForm";
import ShortenedLinks from "../components/ShortenedLinks";

const HomePage = () => {
  const [links, setLinks] = useState([]);

  const addNewLink = (originalUrl, shortUrl) => {
    setLinks(prevLinks => [{
      id: Date.now(),
      original: originalUrl,
      short: shortUrl
    }, ...prevLinks]);
  };

  return (
    <>
        <HeroSection />
        <section className="max-w-3xl mx-auto px-4 mt-8">
            <UrlShortenerForm onShorten={addNewLink} />
            <ShortenedLinks links={links} />
        </section>
    </>
  )
}

export default HomePage