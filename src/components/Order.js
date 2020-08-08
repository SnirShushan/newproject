import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import FormBg from "../Icons/formbg.jpg";


export default class Order extends Component {
  state = {
    address:'',
    phone:'',
    remarks: '',
    packaging: '',
    product: '',
    name: '',
    email: '',
    num: '',
    quantity: '',
    description: '',
    priority: 'Imiditly answer',
    milspec: 'Yes',
    comment: ''
  };
  
  componentDidMount() {
    window.scrollTo(0, 0);
}
  
  handleSubmit = this.handleSubmit.bind(this);

  nameChange = (event) => {
    this.setState({address: event.target.value})
  }
  packagingChange = (event) => {
    this.setState({packaging: event.target.value})
  }
  addressChange = (event) => {
    this.setState({name: event.target.value})
  }
  phoneChange = (event) => {
    this.setState({phone: event.target.value})
  }
  remarksChange = (event) => {
    this.setState({remarks: event.target.value})
  }
  packaginghange = (event) => {
    this.setState({packaging: event.target.value})
  }
  productChange = (event) => {
    this.setState({product: event.target.value})
  }
  emailChange = (event) => {
    this.setState({email: event.target.value})
  }
  numChange = (event) => {
    this.setState({num: event.target.value})
  }
  quaChange = (event) => {
    this.setState({quantity: event.target.value})
  }
  desChange = (event) => {
    this.setState({description: event.target.value})
  }
  milChange = (event) => {
    this.setState({milspec: event.target.value})
  }
  prioChange = (event) => {
    this.setState({priority: event.target.value})
  }
  commentChange = (event) => {
    this.setState({comment: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    const templateId = 'default';

    this.sendMail(templateId, {
      address: this.state.address,
      name: this.state.name, 
      remarks: this.state.remarks, 
      phone: this.state.phone, 
      packaging: this.state.packaging,
      product: this.state.product,
      email: this.state.email,
      num: this.state.num,
      quantity: this.state.quantity,
      description: this.state.description,
      priority: this.state.priority,
      milspec: this.state.milspec,
      comment: this.state.comment,
     }     
    )
    event.target.reset();
  }

  sendMail(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
      alert('Your Order is been Send' +<br></br>+ 'Thanks You!')
    })
    .catch(err => {
      alert('Somthing Wrong!' + <br></br> + 'Please fill all the require fields')
    })
  }

  render(){
  return (
    <div style={{opacity:'0.9', backgroundImage: `url(${FormBg})`}} className="text-white p-5 shadow w-75 mx-auto"> 
      <Form className="mx-auto" style={{opacity:'0.9', fontSize:"1.4rem", width:'60%'}}>
        <div className="p-5 shadow-lg mb-5">
        <h1 className="text-center mt-5 m-5"><u>Personal</u></h1>
        <Form.Row> 
        <Form.Group as={Col} controlId="name">
          <Form.Label>Your name</Form.Label>
           <Form.Control
          style={{fontSize:'1.3rem'}}
            type="text"
            name="name"
            onChange={this.nameChange}
            required/>
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
          style={{fontSize:'1.3rem'}}
            type="text"
            name="phone"
            onChange={this.phoneChange}
            required/>
        </Form.Group>
        </Form.Row> 

        <Form.Row> 
        <Form.Group as={Col} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
          style={{fontSize:'1.3rem'}}
            type="text"
            name="address"
            onChange={this.addressChange}
            required/>
        </Form.Group>

        <Form.Group className="mb-5" as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
          style={{fontSize:'1.3rem'}}
            type="text"
            name="email"
            onChange={this.emailChange}
            required/>
        </Form.Group>
        </Form.Row> 
        </div>
       
<div className="shadow mt-5 p-5 mb-5">
<h1 className="text-center m-4"><u>Product</u></h1>
        <Form.Row> 
        <Form.Group as={Col} controlId="num">
          <Form.Label>Cat/Num</Form.Label>
          <Form.Control
          style={{fontSize:'1.3rem'}}
            type="text"
            name="num"
            onChange={this.numChange}
            placeholder="MIL-1234" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="product">
          <Form.Label>Product of interest</Form.Label>
          <Form.Control
            type="text"
            name="product"
            style={{fontSize:'1.3rem'}}
            onChange={this.productChange}/>
        </Form.Group>
        </Form.Row> 

        <Form.Row> 
        <Form.Group as={Col} controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            onChange={this.quaChange}
            style={{fontSize:'1.3rem'}}
            placeholder="please fill a number" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="packaging">
          <Form.Label>Packaging size</Form.Label>
          <Form.Control
            type="text"
            name="packaging"
            style={{fontSize:'1.3rem'}}
            onChange={this.packagingChange}/>
        </Form.Group>
        </Form.Row> 

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            style={{fontSize:'1.3rem'}}
            onChange={this.desChange}
            rows="3" required/>
        </Form.Group>

        <Form.Row className="w-75 mx-auto">
        <Form.Group as={Col} controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            name="priority"
            style={{fontSize:'1.3rem'}}
            onChange={this.prioChange}
            rows="3">
             <option>Imiditly answer</option>
             <option>24 hour</option>
             <option>one week</option>
             <option>two week</option>
             </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="milspec">
          <Form.Label>Mil-spec</Form.Label>
          <Form.Control
            as="select"
            name="milspec"
            style={{fontSize:'1.3rem'}}
            onChange={this.milChange}>
             <option>Yes</option>
             <option>No</option>
            </Form.Control>
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="remarks">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            name="remarks"
            rows='2'
            style={{fontSize:'1.3rem'}}
            onChange={this.remarksChange}>
            </Form.Control>
        </Form.Group>

          <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            onChange={this.commentChange}
            style={{fontSize:'1.3rem'}}
            rows="2" required/>
            </Form.Group>
</div>
       

            <Col className="text-center">
            <Button className="p-3" style={{fontSize:'1.4rem'}} variant="primary" type="submit" onClick={this.handleSubmit}>
             Send Your Order
           </Button>
            </Col>
      </Form>
    </div>
  )}
 }
 

 