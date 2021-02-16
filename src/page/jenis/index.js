import React, { Component } from 'react';
import { FormJenis } from '../../component/form';
import { TJenis } from '../../component/table';

class Jenis extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-home">
                <FormJenis></FormJenis>
                <TJenis></TJenis>
            </div>);
    }
}

export default Jenis;