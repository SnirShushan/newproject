import React, { Component } from "react";
import productData from "./Products.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Product.css";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      searchResults: productData,
      isSearched: false,
      isMilitarySpec: false,
      isInitial: true
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      const selectedProduct = [this.props.location.state.selection];
      this.setState({ searchResults: selectedProduct });
    }
    window.scrollTo(0, 0);
  }

  handleSearchInput = e => {
    const searchInput = e.target.value;
    this.setState({ searchInput });
  };

  handleSubmit = () => {
    let searchResults = [];
    const { searchInput } = this.state;
    if (!this.state.isMilitarySpec) {
      searchResults = productData.filter(product => {
        if (product.Name) {
          return product.Name.includes(searchInput.toUpperCase());
        } else {
          return;
        }
      });
    } else {
      searchResults = productData.filter(product => {
        if (product.MilitarySpec) {
          return product.MilitarySpec.toUpperCase().includes(
            searchInput.toUpperCase()
          );
        }
      });
    }
    this.setState({ searchResults, isSearched: true });
  };

  handleClear = () => {
    let searchResults = [];
    this.refs.search.value = ""
    if (this.state.isMilitarySpec) {
      searchResults = productData.filter(product => {
        return product.MilitarySpec;
      });
      this.setState({ searchResults });
    } else {
      this.setState({ searchResults: productData });
    }
  };

  render() {
    return (
      <div>
        <div className="bg-light p-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div className="text-center">
                <Form.Label size="xxl" variant="flat">
                  <h1>Find your products</h1>
                </Form.Label>
              </div>
              <div className="w-50 mx-auto">
                <Form.Control
                  style={{ fontSize:"1.3em"}}
                  type="search"
                  onChange={this.handleSearchInput}
                  ref="search"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <div className="text-center">
              <Button
              className="m-3"
                variant="primary"
                style={{fontSize: "1.5em"}}
                onClick={this.handleSubmit}>
                Search
              </Button>
              <Button
              className="m-3"
                style={{ fontSize: "1.5em" }}
                onClick={this.handleClear}>
                Clear
              </Button>
              {this.state.searchResults.length === 0 &&
              this.state.isSearched ? (
                <h1 className="mx-auto">No products were found</h1>
              ) : null}
            </div>
              <div className="float-right">
                <Form.Label
                  className="d-inline"
                  style={{ fontSize: "1.9em",fontWeight:450}}
                  variant="flat">MIL-Spec Filter</Form.Label>
                <Form.Check style={{marginTop:"0",marginBottom:"0"}} className="float-right checkbox">
                  <label class="switch">
                    <input
                      type="checkbox"
                      onChange={() => {
                        this.setState(prevState => ({
                          isMilitarySpec: !prevState.isMilitarySpec
                        }));
                        if (!this.state.isMilitarySpec) {
                          const militaryResults = productData.filter(result => {
                            return result.MilitarySpec;
                          });
                          this.setState({ searchResults: militaryResults });
                        } else {
                          this.setState({ searchResults: productData });
                        }
                      }}/>
                    <span class="slider round"></span>
                  </label>
                </Form.Check>
              </div>
            </Form.Group>
          </Form>
        </div>
        <div>
          <table class="table text-center">
            <thead className="thead-light">
              <tr>
                <th scope="col">
                  <h2>Cat/Num</h2>
                </th>
                <th scope="col">
                  <h2>Name</h2>
                </th>
                <th scope="col">
                  <h2>Description</h2>
                </th>
                <th scope="col">
                  <h2>Unit</h2>
                </th>
                <th scope="col">
                  <h2>Family</h2>
                </th>
                <th scope="col">
                  <h2>FamilyDes</h2>
                </th>

                <th scope="col">
                  <h2>Military Spec</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.searchResults.map(result => {
                return (
                  <tr key={result.ID}>
                    <td>
                      <h4>{result.ID}</h4>
                    </td>
                    <td>
                      <h4>{result.Name}</h4>
                    </td>
                    <td>
                      <h4>{result.Description}</h4>
                    </td>
                    <td>
                      <h4>{result.Unit}</h4>
                    </td>
                    <td>
                      <h4>{result.Family}</h4>
                    </td>
                    <td>
                      <h4>{result.FamilyDes}</h4>
                    </td>
                    <td>
                      <h4>{result.MilitarySpec}</h4>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
