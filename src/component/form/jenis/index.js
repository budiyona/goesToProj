import React, { Component } from 'react';
import { Button, Text } from '../../input';
class FormJenis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namajenis: ""
        }
    }
    setValue = (el) =>{
        this.setState(
            {
                [el.target.name]: el.target.value
            }
        )
    }
    saveValue = () => {
        alert("save")
    }
    render() {
        return (
            <div className="form-formula">
                <Text name={"namajenis"} onChange={this.setValue}>Nama Jenis</Text>
                <Button onClick={this.saveValue}>Tambah</Button>
            </div>
        );
    }
}

export default FormJenis;