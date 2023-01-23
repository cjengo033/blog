import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Image from '../Assets/icon.png'
const Layout = () => {

    const [items, setItems] = useState([]);
    const token = localStorage.getItem("auth_token");
    const user_id = localStorage.getItem("auth_id");
    console.log(user_id);

    const NavBar = () => {

        if (token != undefined) {
            return (
                <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                        <div className="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src={Image} width="40" height="40" class="d-inline-block align-top" alt="" />

                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="/blog">Home</a>
                                    <a className="nav-link" href={`/profile/${user_id}`}>My Profile</a>
                                    <a className="nav-link" href={`/settings/${user_id}`}>Settings</a>
                                    {/* <a className="nav-link" href="/add_students">Add Student</a> */}
                                </div>
                            </div>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <a className="nav-link text-light m-3" href="/logout">Logout</a>
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