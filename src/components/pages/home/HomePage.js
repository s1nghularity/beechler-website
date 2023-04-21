import React from 'react';
import HomeCarousel from '../home/HomeCarousel.js';
import HomeTrio from '../home/HomeTrio.js';
import HomeCategories from '../home/HomeCategories.js';
import HomeAbout from '../home/HomeAbout.js';
import HomeArtistCard from '../home/HomeArtistCard.js';
import HomeDealerCard from '../home/HomeDealerCard.js';

// import HomeProductHighlights from './HomeProductHighlights';
// import HomeArtists from './HomeArtists';
// import HomeDealers from './HomeDealers';
// import HomeTestimonials from './HomeTestimonials';
// import HomeFullWidthImage from './HomeFullWidthImage';

function HomePage() {
    return (
    <div>
        <HomeCarousel />
        <HomeTrio />
        <HomeCategories />
        <HomeAbout/>
        <HomeArtistCard />
        <HomeDealerCard />
        
        {/* 
        <HomeArtists />
        <HomeDealers />
        <HomeTestimonials />
        <HomeFullWidthImage /> */}
    </div>
    );
}

export default HomePage;
