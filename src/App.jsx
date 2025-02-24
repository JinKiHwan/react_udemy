import { useState } from 'react';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
    console.log('APP UPDATE!');

    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}

export default App;
