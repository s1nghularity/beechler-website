import React from 'react';
import HomeCarousel from '../home/HomeCarousel.js';
import HomeTrio from '../home/HomeTrio.js';
import HomeCategories from '../home/HomeCategories.js';
import HomeAbout from '../home/HomeAbout.js';
import HomeArtistCard from '../home/HomeArtistCard.js';
import HomeDealerCard from '../home/HomeDealerCard.js';
import HomeTestimonials from '../home/HomeTestimonials.js';
import HomeContact from '../home/HomeContact.js';

// import HomeProductHighlights from './HomeProductHighlights';
// import HomeArtists from './HomeArtists';
// import HomeDealers from './HomeDealers';
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
        <HomeTestimonials />
        <HomeContact/>
        {/* 
        <HomeArtists />
        <HomeDealers />
        <HomeFullWidthImage /> */}
    </div>
    );
}

export default HomePage;
