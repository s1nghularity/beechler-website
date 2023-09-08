import React from 'react';
import TipOpeningsTable from './TipOpeningsTable.js';
import TipOpeningCarousel from './TipOpeningCarousel.js';

function TipOpenings () {
    return (
        <main itemScope itemType="https://schema.org/WebPage">
            <section>
                <TipOpeningsTable />
            </section>
            <section>
                <TipOpeningCarousel/>
            </section>
        </main>
    );
}

export default TipOpenings;
