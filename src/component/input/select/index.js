import React, { Component } from 'react';
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        
        return (
            <select name="zatKimia" onChange="" className="form-select">
                <option disabled value="" selected>Pilih Zat</option>
                <option value="Cuka">Cuka</option>
                <option value="Garam">Garam</option>
                <option value="Mineral">Mineral</option>
                <option value="Oksigen">Oksigen</option>
            </select>
        );
    }
}

export default Select;