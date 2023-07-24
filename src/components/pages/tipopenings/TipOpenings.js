import React from 'react';
import { Container } from 'react-bootstrap';
import TipOpeningsTable from './TipOpeningsTable.js';
import InstagramCarousel from './InstagramCarousel.js';
import TipOpeningCarousel from './TipOpeningCarousel.js';

function TipOpenings () {
    return (
        <Container>
            <TipOpeningsTable />
            <TipOpeningCarousel/>
            {/* <InstagramCarousel /> */}
        </Container>
        
    );
            
}

export default TipOpenings;