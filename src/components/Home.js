import React, {Component} from "react";
import {CardGroup, Col,Container, Row, Card,Form,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.css";
import Arrow from "../Icons/arrow.png";
import ADDRESS from "../Icons/address.png";
import FAX from "../Icons/fax.png";
import MAIL from "../Icons/mail.png";
import PHONE from "../Icons/phone.png";
import ContactBg from "../Icons/contact_bg.jpg";
import orderI from "../Icons/order.png";
import tankBG from "../Icons/tank.jpg";
import ellsworh from "../Icons/ELLSWORTH.png";
import Brugarolas from "../Icons/Brugarolas.png";
import esgard from "../Icons/esgard.jpeg";
import Everlube from "../Icons/Everlube.png";
import Fibertech from "../Icons/Fibertech.png";
import Iris from "../Icons/Iris.jpg";
import Mobil from "../Icons/Mobil.png";
import Molecular from "../Icons/Molecular.png";
import Nyco from "../Icons/Nyco.png";
import Polysi from "../Icons/Polysi.png";
import Radco from "../Icons/Radco.png";


class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render(){
  return (
    <div className="text-center ls">
<div className="m-5">
<Container>
<Row>
  <Col className="p-5">
  <Form className="mb-5 p-2">
  <h1 style={{fontSize:'3em'}}><u>Specialization</u></h1>
        <p style={{fontSize:'2.5em'}}>
          Importer of products for the 
          <br></br>
          defense industry specializing in
          <br></br>
          coatings, oils, high-quality industrial products
        </p>
        </Form>
        <Link to="./Products" 
        className="rounded-pill m-5 p-4 bg-info text-decoration-none
         text-dark font-weight-bold" 
        style={{fontSize:'2em'}}>
          Find your products
        <Image className="ml-2" src={Arrow} style={{width:'1.3em'}}/>
        </Link>
  </Col>
  <Col>
  <Image className="rounded shadow p-5 bg-light" style={{opacity:'0.85'}} src={tankBG}/>
  </Col>
</Row>
</Container>
      </div>

<div className="m-5">
<Container>
    <Row>
      <Col>
      <Form className="p-4 shadow">
      <h1 className="mt-5" style={{fontSize:'3em'}}><u>
      I.T.C - Intrantional Trading Company
      </u>
  </h1>
  <p className="p-5" style={{fontSize:'2.2em'}}>
Sells a wide range of products for the defence industry as well as for the commercial sector.
These products are manufactured  by worldwide industry leading companies.
Innovation, responsibility and service are the cores of ITC’s activity and it is continuously  accepted it’s vendors.
  </p>
      </Form>
      </Col>
    
    <Col>
    <Image className="rounded p-1 mb-5 pb-5" style={{width:'30%',opacity:'0.8',marginTop:'15%'}} src={orderI}/>
    <br></br>
    <Link to="./Order"
       className="rounded-pill m-5 p-4 bg-info text-decoration-none
       text-dark font-weight-bold" 
      style={{fontSize:'2em'}}>
         Place order
         <Image className="ml-2" src={Arrow} style={{width:'1.3em'}}/>
         </Link>
    </Col>  
    </Row>
    </Container>
</div>

  <div className="p-5 m-5 shadow" style={{backgroundImage: `url(${ContactBg})`}}>
  <h1 className="text-white" style={{fontSize:'4em'}}>Contact Us</h1>
  <CardGroup className="shadow text-center mx-auto">
    <Card className="p-5 m-5" style={{width:'17rem',opacity:'0.85'}}>
    <h3>
    <Card.Img src={ADDRESS} className="mr-3 mb-3" style={{width:'15%'}}/>
      Address
    </h3>
    <Card.Body>
    <Card.Text>
    <h4>P.O.Box: 742, KFAR-SABA 44106, ISRAEL</h4>
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="p-5 m-5" style={{width:'17rem',opacity:'0.85'}}>
    <h4>
    <Card.Img src={MAIL} className="mr-4 mb-4" style={{width:'13%'}}/>
      Genral Support
    </h4>
    <Card.Body>
    <Card.Text style={{fontSize:"1.6rem"}}>aitc@inter.net.il</Card.Text>
    </Card.Body>
    </Card>

    <Card className="p-5 m-5" style={{width:'17rem',opacity:'0.85'}}>
    <h4>
    <Card.Img src={PHONE} className="mr-4 mb-4" style={{width:'13%'}}/>
      Phone Number
    </h4>
    <Card.Body>
    <Card.Text>
    <h4>+972-9-7661139</h4>
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="m-5 p-5" style={{width:'17rem',opacity:'0.85'}}>
    <h4>
    <Card.Img src={FAX} className="mr-4 mb-4" style={{width:'13%'}}/>
      Fax Number
    </h4>
    <Card.Body>
    <Card.Text>
    <h4>+972-9-7660732</h4>
    </Card.Text>
    </Card.Body>
    </Card>
</CardGroup>
</div>

<div className="mt-5 text-center">
          <a href='https://www.ellsworth.com/products/' target='https://www.ellsworth.com/products/'>
          <img src={ellsworh}  alt={ellsworh} style={{marginLeft:'3%',width:'13%',opacity: "0.8", marginRight:'3%'}}/>
          </a>
          <a href='https://brugarolas.com/en/greases-and-oils-for-the-industry/' target='https://brugarolas.com/en/greases-and-oils-for-the-industry/'>
          <img src={Brugarolas} alt={Brugarolas} style={{width: '15%', marginRight:'1%',opacity: "0.8"}}/>
          </a>
           <a href='https://www.esgard.com/products' target='https://www.esgard.com/products'> 
           <img src={esgard} alt={esgard} style={{width: '3.5%', marginRight:'3%',opacity: "0.8"}}/>
           </a>
           <a href='https://everlubeproducts.com/products/' target='https://everlubeproducts.com/products/'> 
           <img src={Everlube} alt={Everlube} style={{width: '5%', marginRight:'3%',opacity: "0.8"}}/>
           </a>
           <a href='https://fibertechinc.net/plastics/' target='https://fibertechinc.net/plastics/'> 
           <img src={Fibertech} alt={Fibertech} style={{width: '9%', marginRight:'3%',opacity: "0.8"}}/>
           </a>
           <a href='http://www.iris-911.com/products.htm' target='http://www.iris-911.com/products.htm'> 
           <img src={Iris} alt={Iris} style={{width: '15%', marginRight:'3%',opacity: "0.8"}}/>
           </a>
           <a href='https://www.global.mobil.com/en/Lubricants' target='https://www.global.mobil.com/en/Lubricants'> 
           <img src={Mobil} alt={Mobil} style={{width: '6%', marginRight:'3%',opacity: "0.8"}}/>
           </a>
           <a href='http://molecularproducts.com/products' target='http://molecularproducts.com/products'> 
           <img src={Molecular} alt={Molecular} style={{width: '10%', margin:'1.5%',opacity: "0.8"}}/>
           </a>
           <a href='https://www.nyco-group.com/products/' target='https://www.nyco-group.com/products/'> 
           <img src={Nyco} alt={Nyco} style={{width: '10%', margin:'1.5%',opacity: "0.8"}}/>
           </a>
           <a href='http://www.polysi.com/' target='http://www.polysi.com/'> 
           <img src={Polysi} alt={Polysi} style={{width: '5.5%', margin:'1.5%',opacity: "0.8"}}/>
           </a>
           <a href='https://radco.com/' target='https://radco.com/'> 
           <img src={Radco} alt={Radco} style={{width: '7%', margin:'1.5%',opacity: "0.8"}}/>
           </a>
           <Link to="./Brands" 
            className="rounded-pill m-5 p-4 bg-info text-decoration-none
            text-dark font-weight-bold" 
             style={{fontSize:'2em'}}>
             And more..
            <Image className="ml-2" src={Arrow} style={{width:'2.2%'}}/>
            </Link>
        </div>
</div>
  );
};
}

export default Home
