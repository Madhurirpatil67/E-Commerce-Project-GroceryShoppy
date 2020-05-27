import React,{Component} from "react";
import {connect} from "react-redux";
import {productInfoById} from "../../redux/action/product/product";
import {addToCart} from "../../redux/action/cart/cart";
import {Card,Button} from "react-bootstrap";
import Loading from "../../components/spinner/spinner";

class Showproduct extends Component{
    paraId;
    constructor(props)
    {
        super(props);
        console.log("data:"+props)
        this.paraId=this.props.match.params.id;
    };
    componentDidMount() {
       this.props.productInfoById(this.paraId);
    };
    addCard=(id)=>{
      this.props.addToCart(id);
    };
    render(){
        console.log("ParaId:"+this.paraId);
        if(this.props.loading){return <Loading/>}
        if(!this.props.product){return null;}
        
        return(
            <div className="container" style={{marginLeft:100}}>
                <h1 style={{textAlign:"center"}}>SHOP PRODUCT DETAILS</h1>
                 <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.product.data.image} />
                    <Card.Body>
                        <Card.Title>{this.props.product.data.name}</Card.Title>
                        <Card.Text>
                         {this.props.product.data.description}
                        </Card.Text>
                        <Button variant="primary"
                        onClick={()=>this.addCard(this.props.product.data._id)}
                        >ADD TO CART</Button>
                    </Card.Body>
                    </Card>
                      </div> 
                </div>
            </div>
        );
    }
};
const mapStateToProps=state=>{
    console.log(state);
    return {product:state.detailsById.item,
    loading:state.detailsById.loading};
}
export default connect(mapStateToProps,{productInfoById,addToCart})(Showproduct);