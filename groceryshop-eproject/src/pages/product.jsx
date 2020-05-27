import React from "react";
import {Card,Button} from "react-bootstrap";

const Product=(props)=>{
    console.log("pro :"+props.product);
    return(
             <div className="row">
                {
                   props.product.item.map((item)=>(
                        <div className="col-md-4 col-sm-4 col-xl-4 col-lg-4 mt-3" key={item._id} 
                        style={{marginBottom:"30px"}}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} style={{height:"200px"}}/>
                         <Card.Body>
                             <Card.Title>{item.name}</Card.Title>
                             <Card.Text>
                                {item.price}
                             </Card.Text>
                             <Card.Text>
                                {item.offerPrice}
                             </Card.Text>
                         <Button variant="primary"
                         onClick={()=>props.history.push(`/showProduct/${item._id}`)}
                         >Go somewhere</Button>
                         </Card.Body>
                         </Card>
                 </div>
                     ))
                 }
              
             </div>
    ); 
};
export default Product;