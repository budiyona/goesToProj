import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Formula, Home, Info, Laporan, Login, ZakKimia } from "../../page";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/formula">
                        <Formula></Formula>
                    </Route>
                    <Route path="/kimia">
                        <ZakKimia></ZakKimia>
                    </Route>
                    <Route path="/laporan">
                        <Laporan></Laporan>
                    </Route>
                    <Route path="/info">
                        <Info></Info>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </div>);
    }
}

export default Body;