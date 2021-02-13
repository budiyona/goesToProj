import React, { Component } from 'react';
import Login from '../login';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // <div className="home-content"> 
            //     <div className=""></div>
            //     <div className="titel-landing-page"></div>
            //     <div className="decription-title">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            //     </div>
            // </div>
            <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">FormulaXApp</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary margin-button-home">Primary</button>
                    <button type="button" className="btn btn-primary margin-button-home">Primary</button>
                </div>
                
            </div>
            <Login/>
            </>
        );
    }
}

export default Home;