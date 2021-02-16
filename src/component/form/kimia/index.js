import React, { Component } from 'react';
import { Button, Text } from '../../input';

class FormKimia extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="form-formula">
            <Text>Nama Kimia</Text>
            <Text>Jenis Kimia</Text>
            <Button>Tambah</Button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Option</th>
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
                </tbody>
            </table>
        </div>
         );
    }
}
 
export default FormKimia;