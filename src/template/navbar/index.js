import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">FormulaX</a>
                    <Link to="/home">
                        <div className="nav-link active" >Beranda</div>
                    </Link>
                    <Link to="/formula">
                        <div className="nav-link disabled" >Formula</div>
                    </Link>
                     <Link to="./kimia">
                        <div className="menu" >Zat Kimia</div>
                    </Link>
                     <Link to="/laporan">
                        <div className="menu" >Laporan</div>
                    </Link>
                     <Link to="/info">
                        <div className="menu" >Info</div>
                    </Link>
                </div>
            </nav>
            // <nav className="navbar navbar-light">
            //     <div class="container-fluid">
            //         <Link to="/home">
            //             <div className="menu" ><font color="white">Beranda</font></div>
            //         </Link>
            //         <Link to="/formula">
            //             <div className="menu" >Formula</div>
            //         </Link>
            //         <Link to="./kimia">
            //             <div className="menu" >Zat Kimia</div>
            //         </Link>
            //         <Link to="/laporan">
            //             <div className="menu" >Laporan</div>
            //         </Link>
            //         <Link to="/info">
            //             <div className="menu" >Info</div>
            //         </Link>
            //     </div>
            // </nav>

        );
    }
}

export default Nav;