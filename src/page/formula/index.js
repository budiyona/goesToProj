import React, { Component } from 'react';
import { FormFormula } from "../../component";
import { TFormula } from '../../component/table';
class Formula extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-home">
                <FormFormula></FormFormula>
                <TFormula></TFormula>

            </div>
        );
    }
}

export default Formula;