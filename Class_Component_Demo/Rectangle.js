import React, { Fragment } from 'react';

class Rectangle extends React.Component {
    state = {
        height:0,
        width: 0,
    };

    handle_dimention_change = (new_height,new_width) =>{
        this.setState({
                height: new_height,
                width: new_width
            }
        );
    };

    render() {
        return (
            <Fragment>
                Height = {this.state.height} <br/>
            
                Width = {this.state.width} <br/>
            
                <button onClick= {()=>{this.handle_dimention_change(12,18)}}>Update Dimentions</button>
            </Fragment>
        );
    }
}

export default Rectangle;
