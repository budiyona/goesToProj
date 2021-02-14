import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="input-grup">
                <label className="form-label">{this.props.children}</label>
                <textarea
                    className="text-area"
                    name="efek"
                />
            </div>
        );
    }
}

export default TextArea;