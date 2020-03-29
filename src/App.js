import React, { Component } from 'react';
import Header from "./components/headerComponent/header.js";
import Footer from "./components/footerComponent/footer.js";
import Homepage from "./components/pages/homePage.js";
import Products from "./components/pages/products.js";
import Contact from "./components/pages/contact.js";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "./Assets/css/default.css";

class App extends Component  {
  render() {
    return (
      <Router>
        <div className="App">
              <Header />

              <Route exact path='/' component={Homepage}></Route>
              <Route exact path='/Products' component={Products}></Route>
              <Route exact path='/Contact' component={Contact}></Route>

              <Footer />
        </div>
      </Router>  
    );
  }
}

export default App;
