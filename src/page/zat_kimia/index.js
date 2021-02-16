import React, { Component } from 'react';
import { FormKimia } from '../../component/form';
import { TKimia } from '../../component/table';
class ZakKimia extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-home">
            <FormKimia></FormKimia>
            <TKimia></TKimia>

           </div>
         );
    }
}
 
export default ZakKimia;
