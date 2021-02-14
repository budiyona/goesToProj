import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mb-3">
                <label className="form-label">{this.props.children}</label>
                <textarea
                    className="form-control"
                    name="efek"
                />
            </div>
        );
    }
}

export default TextArea;