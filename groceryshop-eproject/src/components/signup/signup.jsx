import React,{Component} from "react";
import "./signups.css";
import {connect} from "react-redux";
import {UserRegister} from "../../redux/action/user/user";
import SimpleReactValidator from "simple-react-validator";

class Signup extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            userLogin:{
            userEmail:"",
            userPassword:""
            }
        };
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
    };
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
     inputData= e =>{
      this.setState({[e.target.name]:e.target.value});
    };
    handleFormSubmit= e =>{
        e.preventDefault();
        if(this.validator.allValid()){
            let item={
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                userLogin:{
                    userEmail:this.state.userLogin.userEmail,
                    userPassword:this.state.userLogin.userPassword
                }
            };
            console.log("validation",item);
            this.props.UserRegister(item);
            this.setState({firstName:"", lastName:"",userLogin:{userEmail:"",userPassword:""}});
          }
          else{
              this.validator.showMessages();
              this.forceUpdate();
          }
    }
    render()
    {
        return(
          <div className="divmain">
              <div className="container">
                   <div className="row">
                         <div className="col-md-12">
                            <h3>SIGN UP</h3>
                            <p>Come join the Grocery Shoppy!</p>
                         </div>
                        
                        <div className="col-md-6 col-sm-12">
                            {/* {this.props.error?<div className="alert alert-danger">hey,{this.props.error}
                               </div>
                               :
                               null
                            } */}
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group inputstyle">
                            <label>
                                First Name</label>
                                <input type="text" className="form-control" placeholder="Your Name *" 
                                name="firstName"
                                 value={this.state.firstName}
                                 onChange={this.inputData}
                                 />
                                {this.validator.message("firstName",this.state.firstName,"required|min:4|max:50")}
                            </div>
                            <div className="form-group inputstyle">
                            <label>
                                Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name *" value=""
                                name="lastName"
                                value={this.state.lastName}
                                 onChange={this.inputData}
                                />
                                {this.validator.message("lastName",this.state.lastName,"required|min:4|max:50")}
                            </div>
                            <div className="form-group inputstyle">
                            <label>
                                Email Address</label>
                                <input type="email" className="form-control"  placeholder="Enter email" 
                                nam="userEmail"
                                value={this.state.userLogin.userEmail}
                                onChange={this.setEmailId}
                                />
                                {this.validator.message("userEmail",this.state.userLogin.userEmail,"required|email")} 
                        </div>
                            <div className="form-group inputstyle">
                            <label>
                                Password</label>
                                <input type="Password" className="form-control" placeholder="Your Password *" value=""
                                name="userPassword"
                                 value={this.state.userLogin.userPassword}
                                 onChange={this.setPassword}
                                />
                                {this.validator.message("userPassword",this.state.userLogin.userPassword,"required|min:4|max:50")}
                            </div>
                            <div className="text-center mt-4 inputstyle">
                                <button type="submit" className="btn btn-info">Register</button>
                            </div>
                            </form>
                        </div>
                    </div>
                 </div>
             </div>
        );
    }
};
const mapStateToProps=state=>{
return {state};
};
export default connect(mapStateToProps,{UserRegister})(Signup);