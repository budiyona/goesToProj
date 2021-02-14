import React, { Component } from 'react';
import { Button, Text, TextArea, Date, Option } from "../../input";
import Label from "../../label";

class FormFormula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOption: ["value 1", "value 2", "value 3", "value 4", "value 5"]
        }
    }

    render() {
        let pilihan = this.state.valueOption.map((el) =>
            <Option>{el}</Option>
        )
        return (
            <div className="form-formula">
                    <Text>Nama</Text>
                    <Date>tanggal</Date>
                    <TextArea>Hasil</TextArea>
                    <div className="mb-3">
                        <Label>Zat Kimia</Label>
                        <select class="form-control" id="exampleFormControlSelect2">
                            {pilihan}
                        </select>
                    </div>
                    <Button>Tambah</Button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                <button type="button" class="btn btn-danger btn-sm">hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                <button type="button" class="btn btn-danger btn-sm">hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                <button type="button" class="btn btn-danger btn-sm">hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                <button type="button" class="btn btn-danger btn-sm">hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                <button type="button" class="btn btn-danger btn-sm">hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}


export default FormFormula;