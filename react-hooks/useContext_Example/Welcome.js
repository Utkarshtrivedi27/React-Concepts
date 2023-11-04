import React, { createContext, useContext } from 'react';
import './styles.css';  // Linking the CSS files

// Creating a context 
const theme_context = createContext(null);

function Panel({ title, children }) {  // parameters
    const theme = useContext(theme_context);
    const class_name = 'panel-' + theme;
    return (
        <section class={class_name}>
            <h1>
                {title}
            </h1>
            {children}
        </section>
    );
}

function Button({ children }) {
    const theme = useContext(theme_context);
    const class_name = 'button-' + theme;
    return (
        <button class ={class_name}>
            {children}
        </button>
    );
}

function Form() {
    return (
      <Panel title="Welcome">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    );
}

function Welcome() {
    return (
        <theme_context.Provider value="dark">
            <Form />
        </theme_context.Provider>
    );
}

export default Welcome;


