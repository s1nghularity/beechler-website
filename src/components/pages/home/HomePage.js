import React from 'react';
import HomeCarousel from '../home/HomeCarousel.js';
import HomeTrio from '../home/HomeTrio.js';
// import HomeHorizontalElement from './HomeHorizontalElement';
// import HomeOurCategories from './HomeOurCategories';
// import HomeAboutBeechler from './HomeAboutBeechler';
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
        {/* <HomeHorizontalElement />
        <HomeOurCategories />
        <HomeAboutBeechler />
        <HomeProductHighlights />
        <HomeArtists />
        <HomeDealers />
        <HomeTestimonials />
        <HomeFullWidthImage /> */}
    </div>
    );
}

export default HomePage;
