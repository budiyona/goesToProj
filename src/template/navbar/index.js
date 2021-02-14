import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light atas">
                <div className="container-fluid">
                    <a className="navbar-brand">FormulaX</a>
                    <Link className="nav-link" to="/home">
                        Beranda
                    </Link>
                    <Link className="nav-link" to="/formula">
                        Formula
                    </Link>
                     <Link className="nav-link" to="./kimia">
                        Zat Kimia
                    </Link>
                     <Link className="nav-link" to="/laporan">
                        Laporan
                    </Link>
                     <Link className="nav-link" to="/info">
                        Info
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Nav;