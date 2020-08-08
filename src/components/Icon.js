import React from "react";
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

const icon = () => {
  return (
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
        
        
       
        </div>
  );
};

export default icon;
