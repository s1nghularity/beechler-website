import React from 'react';
import { Container } from 'react-bootstrap';
import TipOpeningsTable from './TipOpeningsTable.js';
import InstagramCarousel from './InstagramCarousel.js';

function TipOpenings () {
    return (
        <Container>
            <TipOpeningsTable />
            <InstagramCarousel />
        </Container>
        
    );
            
}

export default TipOpenings;