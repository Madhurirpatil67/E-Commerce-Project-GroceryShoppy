import React,{Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {LoginUser} from "../../redux/action/user/user";
import SimpleReactValidator from "simple-react-validator";
import Loadding from "../spinner/spinner";
import "./loggedin.css";

class Login extends Component{
    constructor(){
        super();
        this.state={
            userLogin:{
            userEmail:"",
            userPassword:""
            }
        }
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
    }
    setEmailId=e=>{
        let a=Object.assign({},this.state.userLogin);
        a.userEmail=e.target.value;
        this.setState({userLogin:a});
    }
    setPassword=e=>{
       let a=Object.assign({},this.state.userLogin);
       a.userPassword=e.target.value;
       this.setState({userLogin:a});
   }
   
    handleFormSubmit=e=>{
        e.preventDefault();
        if(this.validator.allValid())
        {
            let data={
                userLogin:{
                userEmail:this.state.userLogin.userEmail,
                userPassword:this.state.userLogin.userPassword
                }
            }
            this.props.LoginUser(data);
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    };

  render()
      { 
        return(
          <div className="container">
              <div className="row" style={{marginTop:"20px",marginBottom:"30px"}}>
              <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                  {this.props.error?<div className="alert alert-danger">
                     {this.props.error.message}
                  </div>:null
                  }
                  <form onSubmit={this.handleFormSubmit}>
                   <fieldset>
                   <h2>Please Sign In</h2>
                       <hr className="colorgraph"/>
                       <div className="form-group">
                            <input type="email" name="userEmail" 
                            className="form-control input-lg" placeholder="Email Address"
                            value={this.state.userLogin.userEmail}
                            onChange={this.setEmailId}/>
                            {this.validator.message("Email Id",this.state.userLogin.userEmail,"required|email")}
                        </div>
                        <div className="form-group">
                            <input type="password" name="userPassword"  
                            className="form-control input-lg" placeholder="Password"
                            value={this.state.userLogin.userPassword}
                            onChange={this.setPassword}
                            />
                            {this.validator.message("Password",this.state.userLogin.userPassword,"required|min:5|max:25")}
                        </div>
                        <div className="container">
                        <span>
                            <a href="">Forgot Password?</a>
                        </span>
                        </div>
                        {this.props.error?<Loadding/>:null}
                        <hr className="colorgraph"/>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <input type="submit" className="btn btn-md btn-success btn-block" 
                                value="Sign In"/>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                            <span style={{float:"right"}}>
                            <Link to="/signup">Go to SignUp</Link>
                        </span>
                        </div>
                        </div>
                   </fieldset>
                  </form>
                  </div>
              </div>
          </div>
      );
  }
};
const mapStateToProps=state=>{
    console.log("state:",state);
    return {error:state.login.error_message};
}
export default connect(mapStateToProps,{LoginUser})(Login);