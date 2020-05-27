import React,{Component} from "react";
import {Spinner} from "react-bootstrap";

class Loadding extends Component{
   render()
   {
       return(
        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
       );
   }
};
export default Loadding;