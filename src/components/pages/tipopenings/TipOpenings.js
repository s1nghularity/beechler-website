import React from 'react';
import TipOpeningsTable from './TipOpeningsTable.js';
import TipOpeningCarousel from './TipOpeningCarousel.js';

function TipOpenings () {
    return (
        <main>
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
