import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Header from "Components/Header";
import TV from "Routes/TV";
import Detail from "Routes/Detail"
export default () => {
    return (
        <Router>
            <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/"/>
            </Switch>
            </>
        </Router>
    )
}