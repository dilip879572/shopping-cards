import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row menu  sticky-top bg-light">
                <div className="col-sm-3 text-center" data-aos="fade-right"  data-aos-duration="2000" style={{"lineHeight": "60px"}}>
                    <b className="text-mycolor fs-2 text-center" >DESIRE<span className='text-dark'>CART</span></b>
                </div>
                <div className="col-sm-9 ">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link className="nav-link " aria-current="page" to="/"> <i className="fa-solid fa-house-user"></i>HOME</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " aria-current="page" to="/ourproduct"><i className="fa-brands fa-product-hunt"></i>PRODUCT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/myorder"><i className="fa-solid fa-cart-shopping"></i>MY ORDER</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile"><i className="fa-solid fa-user "></i>
                                            MY PROFILE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/customersupport"><i className="fa-solid fa-phone"></i>
                                            CUSTOMER SUPPORT</Link>
                                    </li>
                                    <li className="nav-item  ">
                                        <Link className="nav-link" to="/signup"><i className="fa-solid fa-user"></i>SIGN-UP</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn text-white bg-mycolor"  to="/signin"><i className="fa-solid fa-key"></i>SIGN-IN</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;