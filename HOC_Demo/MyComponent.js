import React from 'react';
import './MyComponent.css';   // Linking the CSS file

class MyComponent extends React.Component {
    render() {
        return (
            <div class='MyComponent'>
                <p>{this.props.data}</p>
                {/*If data object has some properties, then those will be accessed as "data.property_name" */}
        
            </div>
        );
    }
}

export default MyComponent;
