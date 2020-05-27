import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import banner1 from  "../../assets/banner1.jpg";
import banner2 from  "../../assets/banner2.jpg";
import banner3 from  "../../assets/banner3.jpg";
import banner4 from  "../../assets/banner4.jpg";

function Slider(){
  return(
      // <div className="container" >
      // <div className="row" >
       <div className="col-md-12 col-sm-12 col-lg-12" >
 <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="First slide"
      style={{height:"500px"}}
    />
   <Carousel.Caption >
      <span style={{fontSize:80,color:"white",fontWeight:800,marginTop:20}}>BIG SAVE</span><br/>
      <p style={{fontSize:30,color:"white",fontWeight:600}}>Get flat 10% Cashback</p>
      <Button  variant="info" href="#" size="lg">
      Shop Now
        </Button>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="second slide"
      style={{height:"500px"}}
    />
    <Carousel.Caption >
      <span style={{fontSize:50,color:"white",fontWeight:700}}>HEALTHY SAVING</span>
      <p style={{fontSize:30,color:"red",fontWeight:700}}>Get Upto 30% Off</p>
      <Button  variant="info" href="#" size="lg">
      Shop Now
        </Button>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
      style={{height:"500px"}}
    />

    <Carousel.Caption>
      <span style={{fontSize:50,color:"white",fontWeight:700}}>BIG DEAL</span>
      <p style={{fontSize:30,color:"pink",fontWeight:700}}>Get Best Offer Upto 20%</p>
      <Button  variant="info" href="#" size="lg">
      Shop Now
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Forth slide"
      style={{height:"500px"}}
    />

    <Carousel.Caption>
    <span style={{fontSize:50,color:"white",fontWeight:700}}>TODAY DISCOUNT</span>
      <p style={{fontSize:30,color:"red",fontWeight:700}}>Get Now 40% Discount</p>
      <Button  variant="info" href="#" size="lg">
      Shop Now
        </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
//  </div>
//  </div>
        )
};

export default Slider;