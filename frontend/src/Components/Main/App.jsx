import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Logo from "../Template/Logo";
import Nav from "../Template/Nav";
import Footer from "../Template/Footer";

const app = (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Routes />
      <Footer></Footer>
    </div>
  </BrowserRouter>
);

export default app;
