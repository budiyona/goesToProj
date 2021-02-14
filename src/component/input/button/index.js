import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
            <button 
            type="submit" 
            className="btn btn-primary">
                {this.props.children}
            </button>
         );
    }
}
 
export default Button;