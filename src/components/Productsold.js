import React, { Component } from "react";
import { Row, Col, ListGroup, Card, Accordion, Button } from "react-bootstrap/";
import "./Products.css";
import {Animated} from "react-animated-css";


class Products extends Component {
  state = {
    products: [],
    name: "",
    searchedProducts: {}
  };

  handleClick = productType => {
    fetch(`http://localhost:3000/${productType}`).then(res =>
      res.json().then(data => this.setState({ products: data }))
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = () => {
    fetch(`http://localhost:3000/search/${this.state.name}`)
      .then(res => res.json())
      .then(product => {
        console.log(product);
        if (product.found === 200) {
          this.setState({
            products: [],
            searchedProducts: { found: true, data: product.data }
          });
        } else if (product.found === 201) {
          this.setState({ products: [], searchedProducts: "Not Found" });
        }
      });
  };

  render() {
    let productList = (
      <h1 className="text-center mt-4">Select category or Search products</h1>
    );
    if (this.state.products.length > 0) {
      productList = this.state.products.map(product => {
        return product.product_description !== null ? (
          <Accordion defaultActiveKey="0">
            <Card>
              
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  style={{ fontSize: "20px" }}
                >
                  {product.product_name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1" style={{ fontSize: "20px" }}>
                <Card.Body>{product.product_description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ) : (
          <Card>
            {" "}
            <Card.Header>{product.product_name}</Card.Header>
          </Card>
        );
      });
    } else if (this.state.searchedProducts === "Not Found") {
      productList = (
        <h1 className="text-center mt-4">Product not found, try again</h1>
      );
    } else if (this.state.searchedProducts.found) {
      productList = this.state.searchedProducts.data.map(product => {
        return product.product_description !== null ? (
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  style={{ fontSize: "20px" }}
                >
                  {product.product_name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1" style={{ fontSize: "20px" }}>
                <Card.Body>{product.product_description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ) : (
          <Card>
            {" "}
            <Card.Header>{product.product_name}</Card.Header>
          </Card>
        );
      });
    }


    
    return (




      <div className="container-fluid main">
        <Animated animationIn="fadeIn"> 
      <section className="shadow rounded mx-auto" style={{width:'65%',marginTop:'5%',marginBottom:'5%',padding:'3%',backgroundColor: "#0063B2FF", opacity: "0.8"}}>
                    <div className="shadow-lg rounded" style={{width:'45%' ,backgroundColor: '#9CC3D5FF', marginRight:'Auto',marginLeft:'Auto',marginTop:'-11%', paddingLeft:'5%',paddingRight:'5%' ,paddingTop:'1%', paddingBottom:'1%'}}>
                    <h1  className="h1-responsive text-center my-4" >Try Find Your Product</h1>
                    </div>
              <div className="row .bg-secondary" style={{margin:'3%'}}>
                <form className="col-sm-6 mx-auto text-center">
                  <br></br>
                  <input type="text" className="w-100 form-control" placeholder="By ID, Number or Name" />
                  <br></br>
                  <br></br>
                  <div className="row mx-auto">
                    <button type="button" className="btn btn-warning shadow-lg mx-auto w-45"
                    action
                    onClick={() => {
                      this.handleClick("Greases");
                    }}>
                      Search
                    </button>
                  </div>
                </form>
                </div>
            </section>
      </Animated>
      
        <Row className="mt-2" style={{fontSize:'2.5em'}}>
          <Col xs={12} sm={2}>
            <ListGroup>
              <ListGroup.Item
                className="paintsandcoatings"
                onClick={() => {
                  this.handleClick("Paints and Coatings");
                }}>
                Paints and Coatings
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => {
                  this.handleClick("Greases");
                }}>
                Greases{" "}
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => {
                  this.handleClick("Solid Film Lubricants");
                }}>
                Solid Film Lubricants
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => {
                  this.handleClick("Specialty Products");
                }}>
                Specialty Products
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => {
                  this.handleClick("Silicone Oil and Greases");
                }}>
                Silicone Oil and Greases
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => {
                  this.handleClick("Sealants and Adhesives");
                }}>
                Sealants and Adhesives
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card
              style={{
                minHeight: "400px",
                maxHeight: "400px",
                overflow: "auto"
              }}>
              {productList}
            </Card>
          </Col>
        </Row>
      </div>
    )}
}

export default Products;
