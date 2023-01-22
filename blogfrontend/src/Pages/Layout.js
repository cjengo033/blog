import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const Layout = () => {
    
    const [items, setItems] = useState([]);
    const token = localStorage.getItem("auth_token");
    const user_id = localStorage.getItem("auth_id");
    console.log(user_id);

    const NavBar = () => {

        if (token != undefined) {
            return (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="/blog">Home</a>
                                    <a className="nav-link" href="/blog">Blog</a>
                                    <a className="nav-link" href={`/profile/${user_id}`}>My Profile</a>
                                    <a className="nav-link" href="/logout">Logout</a>
                                    {/* <a className="nav-link" href="/add_students">Add Student</a> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Outlet /></>
            )
        } else {
            return (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" href="/" disabled>Portfolio</a>
                                    {/* <a className="nav-link" href="/add_students">Add Student</a> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Outlet /></>
            )
        }

    }


    return (
        <>
            <NavBar />
        </>
    )
}

export default Layout