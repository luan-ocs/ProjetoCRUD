import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../Home/Home";
import UsersCrud from "../User/user";

const Routes = (props) => 
<Switch>
    <Route exact path="/" component={Home}>   
    </Route>
    <Route path="/users" component={UsersCrud}></Route>
    <Redirect from="*" to="/"></Redirect>
</Switch>;
export default Routes;
