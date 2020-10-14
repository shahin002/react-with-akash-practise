import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" aria-label="Main Navigation">
                <div className="content-header bg-white-5">
                    <a className="font-w600 text-dual" href="index.html">
                        <i className="fa fa-circle-notch text-primary"></i>
                        <span className="smini-hide">
                            <span className="font-w700 font-size-h5">ne</span> <span className="font-w400">4.5</span>
                        </span>
                    </a>
                </div>

                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li className="nav-main-item">
                            <Link to="/dashboard" className="nav-main-link active" >
                                <i className="nav-main-link-icon si si-speedometer"></i>
                                <span className="nav-main-link-name">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                               aria-haspopup="true" aria-expanded="false" href="/#">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Content Management</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <a href="/#" className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                       aria-haspopup="true" aria-expanded="false" >
                                        <i className="nav-main-link-icon si si-bag"></i>
                                        <span className="nav-main-link-name">Posts</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link to="/posts" className="nav-main-link">
                                                <span className="nav-main-link-name">Post List</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" >
                                                <span className="nav-main-link-name">Post Create</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                       aria-haspopup="true" aria-expanded="false" href="/#">
                                        <i className="nav-main-link-icon si si-handbag"></i>
                                        <span className="nav-main-link-name">Categories</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link">
                                                <span className="nav-main-link-name">List</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Sidebar;
