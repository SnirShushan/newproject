import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Order from "./components/Order";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Icon from "./components/Icon";


function App() {
  return (
    <div  className="container-fluid">
      <Router>
        <Navbar />
        <Redirect exact from="/" to={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/Products" exact component={Products} />
        <Route path="/Order" exact component={Order}/>
        <Icon />
      </Router>
      
      <div className="footer-copyright text-center text-light bg-dark mt-4 p-2 fixed-absolute">
      <h5>All rights reserved © ITC - International Trade-in Company</h5>
     </div>
    </div>
  );
}

export default App;
