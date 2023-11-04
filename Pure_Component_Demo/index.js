import React ,{useState} from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from './Greeting';

const App = () => {
    const [name, setName] = useState('');   // Only this will be considered for re-rendering
    const [address, setAddress] = useState('');
    return (
        <div>
            <label>
                Name{': '}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label><br/>
            
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>

            <Greeting name={name} />
        </div>
    );
}
  
const root = createRoot(document.getElementById('root'));
root.render(<App />);
