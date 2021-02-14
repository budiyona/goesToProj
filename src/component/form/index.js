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
                <div className="card-body">
                        <Text>Nama</Text>
                        <Date>tanggal</Date>
                    <div className="mb-3">
                        <Label>Zat Kimia</Label>

                        <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <TextArea>Hasil</TextArea>
                    <Button>Tambah</Button>
                </div>
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
        toggleStat: (stat) => dispatch({
            type: "TOGGLE_EDITSTAT",
            editstat: stat
        }),
        saveEdit: (obj, idx) => dispatch({
            type: "SET_UPDATE",
            dataBaru: obj, idx: idx
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);