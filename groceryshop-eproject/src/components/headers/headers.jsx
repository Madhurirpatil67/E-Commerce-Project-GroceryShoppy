import React,{Component} from "react";
import {Nav,Navbar,NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./headerstyle.css";

class Headers extends Component{
  render(){
      return(
            
            <React.Fragment>
              <div className="divheads" style={{width:"100%",backgroundColor:"#00BFFF",height:"50px"}}>
               <h1>
                    Grocery Offer Zone Top Deals & Discounts
               </h1>
              </div>
             
            <Navbar collapseOnSelect className="align-content-center" expand="lg" variant="dark" style={{color:"#000000",border:"1px solid black",
          backgroundColor:"lightgrey"}}>
            <Navbar.Brand style={{color:"black",fontSize:"20px",fontWeight:"600"}} as={Link} to="/login">Navbar</Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="mr-auto">
            <NavDropdown  title="All Categories" id="collasible-nav-dropdown" style={{color:"black",fontSize:"20px",fontWeight:"600"}}>
                   <NavDropdown.Item href="#action/3.1">Kitchen</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Household</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Snacks & Beverages</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Gift Hamper</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Fruits & vegetables</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Baby Care</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Soft Drinks & Juices</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Frozen Food</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Bread & Bakery</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.4">Sweets</NavDropdown.Item>
                 </NavDropdown>
            <Nav.Link style={{color:"black",fontSize:"20px",fontWeight:"600"}} as={Link} to="/home">
              Home</Nav.Link>
            <Nav.Link style={{color:"black",fontSize:"20px",fontWeight:"600"}} as={Link} to="/aboutus">
              About Us</Nav.Link>
            <Nav.Link style={{color:"black",fontSize:"20px",fontWeight:"600"}} as={Link} to="/login">
              Faqs</Nav.Link>
            <Nav.Link style={{color:"black",fontSize:"20px",fontWeight:"600"}} as={Link} to="/contact">
              Contact</Nav.Link>
            </Nav>
            <Nav inline="true">
               <Nav.Link style={{color:"black",fontSize:"20px",fontWeight:"600"}} as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link style={{color:"black",fontSize:"20px",fontWeight:"600"}}  as={Link} to="/signup">
                Signup
              </Nav.Link>
            </Nav>
             
           
  {/* <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav"> 
          <li class="dropdown">
                <a href="#" class="dropdown-toggle multi-column-dropdown" data-toggle="dropdown">
                          Two Column <b class="caret"></b></a>
          <ul class="dropdown-menu multi-column columns-2">
		          <div class="row">
			            <div class="col-sm-6">
				            <ul class="multi-column-dropdown">
					            <li><a href="#">Action</a></li>
					            <li><a href="#">Another action</a></li>
					            <li><a href="#">Something else here that's extra long so we can see how it looks</a></li>
					            <li class="divider"></li>
					            <li><a href="#">Separated link</a></li>
					            <li class="divider"></li>
					            <li><a href="#">One more separated link</a></li>
				            </ul>
			            </div>
			            <div class="col-sm-6">
				            <ul class="multi-column-dropdown">
					            <li><a href="#">Action</a></li>
					            <li><a href="#">Another action</a></li>
					            <li><a href="#">Something else here</a></li>
					            <li class="divider"></li>
					            <li><a href="#">Separated link</a></li>
					            <li class="divider"></li>
					            <li><a href="#">One more separated link</a></li>
				            </ul>
			            </div>
		            </div>
	            </ul>
	        </li>
     </ul>
</div>    */}
       </Navbar.Collapse> 
     </Navbar>
     </React.Fragment>
           
        );
    }
};
export default Headers;