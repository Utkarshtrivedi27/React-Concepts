import React from 'react';
import { createRoot } from 'react-dom/client';
import Age from './Age';

const App = () => {
    return (
        <div>
            <Age />
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
