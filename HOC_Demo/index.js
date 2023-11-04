import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';

const App = () => {
    // Define an array named "arr"
    const arr = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>The elements of the array are:</h1>
            {/* Pass the "arr" array as a prop to the HelloWorld component */}
            <HelloWorld myArray={arr} />
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
