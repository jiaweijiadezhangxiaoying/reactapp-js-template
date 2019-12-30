import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import Login from "../views/login/login.jsx";
import Home from "../views/home/home.jsx";

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Login />
                <Home />
            </Router>
        );
    }
}