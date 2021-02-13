import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionType } from '../../redux';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        console.log("props",this.props);
        console.log(this.state);
        return ( 
            <input 
                type="number" 
                
                name=""
            />
         );
    }
}
const mapStateToProps = (state) => {
    return {
        nama: state.nama
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setNama: () => dispatch({type: ActionType.SET_NAMA_ACTION
        ,nama: this.state.namainput
        }),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Text);