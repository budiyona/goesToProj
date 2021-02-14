import React, { Component } from 'react';
import Login from '../login';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
                <div className="container-home">
                    <div className="card center-margin fixed-landing-app">
                        <div className="card-body">
                            <h5 className="card-title">FormulaXApp</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <Login />
                </div>
        );
    }
}

export default Home;