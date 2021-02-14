import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionType } from '../../redux';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <div className="mb-3">
                <label className="form-label">{this.props.children}</label>
                <input type="number" className="form-control"/>
            </div>
         );
    }
}
export default Text;