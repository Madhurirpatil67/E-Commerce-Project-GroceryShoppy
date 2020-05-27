import React,{Component} from "react";
import {connect} from "react-redux";
import {productInfo} from "../../redux/action/product/product";
import Loading from "../spinner/spinner";
import Product from "../../pages/product";

class Home extends Component{
    
    constructor(props){
        super(props);
    };
    componentDidMount(){ 
        this.props.productInfo();
    }
  render()
  {
    if(this.props.loading){return <Loading/>}
       if(!this.props.productdata){return null};
      return(
          <div className="container">
              <h1 style={{textAlign:"center"}}>ALL PRODUCTS</h1>
              <Product product={this.props.productdata}{...this.props}/> 
              </div>
    );
  }
};
const mapStateToProps=state=>{
    console.log(state);
    return {productdata:state.details.item
    ,loading:state.details.loading};
}
export default connect(mapStateToProps,{productInfo})(Home);