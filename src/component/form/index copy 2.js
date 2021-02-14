import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text, TextArea, Date, Select } from "../input";
import Label from "../label";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (   
            <div className="Form">
                <Label>Nama Formula</Label>
                <Text></Text>
                <Label>Tanggal Dibuat</Label>
                <Date></Date>
                <Label>Zat Kimia</Label>
                <Select/>
                <Label>List Zat Kimia</Label>
                    <div className="list-kimia">
                    </div>
                <Label>Efek</Label>
                <TextArea></TextArea>
                <Label>Button</Label>
                <Button></Button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        formula: state.formula,
        editobject: state.objtoEdit,
        status: state.globEdit,
        idxEdit: state.idxEdit,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFormula: (obj) => dispatch({
            type: "SET_FORMULA"
            , formula: obj
        }),
        toggleStat: (stat) => dispatch({type: "TOGGLE_EDITSTAT", 
        editstat : stat}),
        saveEdit: (obj, idx) => dispatch({type: "SET_UPDATE", 
        dataBaru: obj, idx:idx})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);