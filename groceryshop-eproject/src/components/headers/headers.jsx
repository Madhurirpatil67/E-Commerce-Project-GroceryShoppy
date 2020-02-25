import React,{Component} from "react";
import {Nav,Navbar,NavDropdown,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class Headers extends Component{
  render(){
      return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            <Navbar.Collapse id="responsive-navbar-nav">
            <NavDropdown title="All Categories" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                 </NavDropdown>
              
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
               
                <Nav.Link as={Link} to="/login">About Us</Nav.Link>
               
               
                 <NavDropdown title="Kitchen" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                 </NavDropdown>
                  <NavDropdown title="Household" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                 </NavDropdown>
                  
                 <Nav.Link as={Link} to="/login">Faqs</Nav.Link>
                 <Nav.Link as={Link} to="/login">Contact</Nav.Link>
             </Navbar.Collapse>
           </Navbar>
        );
    }
};
export default Headers;