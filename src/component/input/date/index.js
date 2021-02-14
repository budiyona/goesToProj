import React, { Component } from 'react';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className="input-grup">
                <label
                    className="label">{this.props.children}
                </label>
                <input
                    type="date"
                    className="form-label"
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

export default Date;