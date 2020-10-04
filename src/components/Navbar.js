import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav,Image } from 'react-bootstrap';
import Logo from "../Icons/Logo.png";

const navbar = () => {
  return (
    <>
    <div>
    <div className="bg-dark text-center p-5">
          <Image src={Logo} alt={Logo} className="w-75"/>
        </div>
        <div>
        <Navbar className="bg-dark">
        <Nav>
            <Link to="./" className="nav-link">
              <h2 className="text-white m-4">I.T.C - Site</h2>
            </Link>
          
            <Link to="./Products" className="nav-link">
              <h2 className="text-white m-4">Products</h2>
            </Link>

            <Link to="./Order" className="nav-link">
              <h2 className="text-white m-4">Order</h2>
            </Link>

            <Link to="./Brands" className="nav-link">
              <h2 className="text-white m-4">Brands</h2>
            </Link>
        </Nav>
      </Navbar>
        </div>
    </div>
    </>
  );
};

export default navbar;
