import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './components/home/home';
import Login from "./components/login/login";
import Headers from "./components/headers/headers";
import Contact from "./components/contact/contact";
import Signup from './components/signup/signup';
import Slider from './components/slider/slider';
import About from './components/about/aboutus';
import Showproduct from "./components/showProducts/showProduct";
import Cart from './components/cart/cart';

class App extends Component {
  render(){
    return (
     <React.Fragment>
        <Headers/>
        <Slider/>
         <Switch>
           <Route path="/" exact component={Login}/>
           <Route path="/login" exact component={Login}/>
           <Route path="/signup" exact component={Signup}/>
           <Route path="/home" exact component={Home}/>
           <Route path="/contact" exact component={Contact}/>
           <Route path="/aboutus" exact component={About}/>
           <Route path="/showProduct/:id" exact component={Showproduct}/>
           <Route path="/cart" exact component={Cart}/>
         </Switch>
        
     </React.Fragment>
     );
   }
};
export default App;
