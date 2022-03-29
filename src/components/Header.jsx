import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, NavLink, Route } from 'react-router-dom';

const Header = () => {
    const [color, setColor] = useState('white')
    return (
        <aside className="col-12 col-md-3 col-xl-2 p-0 " style={{ backgroundColor: '#000' }}>
            <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top "
                id="sidebar">
                <div className="text-center p-3">
                    {/* <img src={photo} alt="profile picture"
                    className="img-fluid rounded-circle my-5 p-0 d-none d-md-block shadow" /> */}
                    <span className="navbar-brand mx-0 font-weight-bold text-nowrap baslik">ATA DEMİRKIRAN</span>
                </div>
                <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse"
                    data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse order-last" id="nav">
                    <ul className="navbar-nav flex-column w-100 justify-content-center">
                        <li className="nav-item">
                            <NavLink to={'/'} style={{ color }} >Ana Sayfa</NavLink>
                        </li>
                        <li className="nav-item mt-2">
                            <NavLink to={'/projects'} style={{ color }}>Projeler</NavLink>
                        </li>
                        <li className="nav-item mt-2">
                            <NavLink to={'/contact'} style={{ color }}>İletişim</NavLink>
                        </li>
                        {/* <li className="nav-item">
                        <a href="#" className="nav-link"> Users Info </a>
                    </li> */}
                        <li className="nav-item mt-2">
                            <a href='#'><i className="fa fa-instagram" style={{ fontSize: '24px', color: 'black' }}></i></a>
                            <a href='#' className='ml-2'><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>
                        </li>
                        {/* <li className="nav-item mt-2">
                      <i className="fa fa-home" style={{color:'white'}}> İstanbul/Beyoğlu</i>
                    </li> */}
                        <li>
                            <div className='socialMedia'>
                                <a href='#'> <i className="fab fa-youtube"></i></a>
                                <a href='#'><i className="fab fa-github ml-3"></i></a>
                                <a href='#'> <i className="fab fa-instagram ml-3"></i></a>
                                <a href='#'><i className="fab fa-linkedin-in ml-3"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </aside>

    )
}

export default Header