import React from "react";
import { Link } from "react-router-dom";
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  me-0 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    <Link className="py-0 navbar-brand mx-auto fw-bold" to="/">Modern Store</Link>
                    <Login/>
                    <Signup/>
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
