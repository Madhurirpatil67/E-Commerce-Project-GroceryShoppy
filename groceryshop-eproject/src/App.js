import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './components/home/home';
import Login from "./components/login/login";
import Headers from "./components/headers/headers";
class App extends Component {
  render(){
    return (
     <React.Fragment>
        <Headers/>
         <Switch>
           <Route path="/" exact component={Login}/>
           <Route path="/login" exact component={Login}/>
           <Route path="/home" exact component={Home}/>
         </Switch>
     </React.Fragment>
     );
   }
};
export default App;
