import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Catalog from "./pages/Catalog";

const routing = (
  <Router>
    <div>
      <Route path="/" component={Catalog} />
    </div>
  </Router>
);

export default ReactDOM.render(routing, document.getElementById("root"));
