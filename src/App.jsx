import { useState } from 'react';
import { contents } from '../data';
import { EXAMPLES } from '../data.js';

import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import Box from './components/Box.jsx';

function App() {
    console.log('APP UPDATE!');

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {contents.map((content, index) => (
                            <CoreConcept {...content} key={index} />
                        ))}
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <Box></Box>
                </section>
            </main>
        </div>
    );
}

export default App;
