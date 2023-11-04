import React from 'react';
import { createRoot } from 'react-dom/client';
import Welcome from './Welcome';

const App = () => {
    return (
        <div>
            <Welcome/>
        </div>
        
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
