 import React from 'react';

class Greeting extends React.PureComponent {
  render() {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return (
      <h3> 
        Hello{this.props.name && ', '}{this.props.name}!
      </h3>
    );
  }
}

export default Greeting;
