import React from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"


import Lgin from "../pages/login/login"
import Home from "../pages/home/home"

export default () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/" component={() =>
                        <Redirect to="/login" />
                    } />
                    <Route exact path="/login" component={Lgin} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    )
}