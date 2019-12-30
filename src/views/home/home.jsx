import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import TestLogin from "../../components/hoc/testLogin.jsx";
import Header from "../../components/home/header.jsx"
import style from "../../static/css/home.module.css";

class Home extends Component {
    render() {
        return (
            <div className={style.container}>
                <header className={style.header}>
                    <Header />
                </header>
                <nav className={style.nav}>

                </nav>
            </div>
        );
    }
}

let HomeRouter = () => {
    return (
        <div>
            <Route path="/" exact component={() => <Redirect to="/home" />} />
            <Route path="/home" component={TestLogin(Home)} />
        </div>
    )
}
export default HomeRouter;