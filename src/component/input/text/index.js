import React, { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namainpur: ""
        }
    }
    render() {
        return (
            <div className="input-grup">
                <label className="form-label">{this.props.children}</label>
                <input type="text" className="input" />
            </div>
        );
    }
}
export default Text;