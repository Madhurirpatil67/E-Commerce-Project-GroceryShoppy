import React,{Component} from "react";
import {connect} from "react-redux";
class Cart extends Component{
    constructor(props)
    { 
       super(props);
    };
    render()
    {
        return(
            <div className="container">
                <h1>ADD TO CART</h1>
            </div>
        );
    }
};
const mapStateToProps=state=>{
    console.log(state);
    return state;
}
export default connect(mapStateToProps)(Cart);