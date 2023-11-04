import React from 'react';
import MyComponent from './MyComponent';

class HelloWorld extends React.Component {
    render() {
        return(
            <div>
                {/* Passing the "arr" as myArray as a prop to the HelloWorld component */}
                
                {this.props.myArray.map( (element) => (
                        <MyComponent data={element} key={element} />
                    ) )
                }
            </div>
        )
    }
}

export default HelloWorld;
