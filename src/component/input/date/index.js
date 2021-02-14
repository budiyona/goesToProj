import React, { Component } from 'react';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className="mb-3">
                <label
                    className="form-label">{this.props.children}
                </label>
                <input
                    type="date"
                    className="form-control"
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

export default Date;