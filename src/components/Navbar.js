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
          <Nav.Link>
            <Link to="./" className="nav-link">
              <h2 className="text-white m-1">I.T.C - Site</h2>
            </Link>
          </Nav.Link>
          
          <Nav.Link>
            <Link to="./Products" className="nav-link">
              <h2 className="text-white m-1">Products</h2>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="./Order" className="nav-link">
              <h2 className="text-white m-1">Order</h2>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="./Products" className="nav-link">
              <h2 className="text-white m-1">Brands</h2>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
        </div>
    </div>
    </>
  );
};

export default navbar;
