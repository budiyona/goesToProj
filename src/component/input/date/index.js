import React, { Component } from 'react';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( <input 
            type="date" 
            name="tanggal" onChange=""
        /> );
    }
}
 
export default Date;