import React, { Component } from 'react';
import { connect } from 'react-redux';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namainpur: ""
        }
    }
    render() {
        return (
            <div className="mb-3">
                <label className="form-label">{this.props.children}</label>
                <input type="text" className="form-control" />
            </div>
        );
    }
}
export default Text;