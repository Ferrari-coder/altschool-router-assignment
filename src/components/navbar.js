import React from "react";
import Home from "./home";
import User from "./user";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import "./navbar.css"
import PageNotFound from "./404";

const NavBar = () => {

    // if(true) {
    //     throw new Error('error')
    // }
    return (
        <Router>
            <header>
                <div className="nav">
                    
                    <ul className="navigation_items">
                        <li><NavLink style={({ isActive }) =>
                            isActive ? { color: "grey" } : { color: "purple" }
                        } to="/" >Home </NavLink></li>
                        <li><NavLink style={({ isActive }) =>
                            isActive ? { color: "grey" } : { color: "purple" }
                        } to="/user" >User</NavLink></li>
                    </ul>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/user" element={<User />}></Route>
                        <Route path="*" element={<PageNotFound/>}></Route>
                        
                    </Routes>
                    
                </div>
            </main>
        </Router>


    )
}

export default NavBar;