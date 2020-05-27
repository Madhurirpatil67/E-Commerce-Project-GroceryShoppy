import React,{Component} from "react";
import {connect} from "react-redux";
import {addContact} from "../../redux/action/contact/contact";
import SimpleReactValidator from "simple-react-validator";
import "./contacts.css";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            userEmail:"",
            subject:"",
            message:""
        };
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
    };
    inputData= e =>{
        this.setState({[e.target.name]:e.target.value});
      };
    handleFormSubmit= e =>{
        e.preventDefault();
        if(this.validator.allValid()){
            let item={
                fname:this.state.fname,
                userEmail:this.state.userEmail,
                subject:this.state.subject,
                message:this.state.message
            };
            this.props.addContact(item);
            this.setState({fname:"", userEmail:"",subject:"",message:""})
          }
          else{
              this.validator.showMessages();
              this.forceUpdate();
          }
    }
    render(){
        return(
             <div className="main">
             <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-col-md-12 col-col-xl-12 col-lg-12">
                        <h1 className="h1">
                              Contact Us</h1>
                    </div>
                </div>
              </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-col-md-12 col-col-xl-12 col-lg-12">
                        <div className="well well-sm">
                        <form onSubmit={this.handleFormSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label>
                                Name</label>
                            <input type="text" className="form-control"  placeholder="Enter name" 
                            name="fname"
                            value={this.state.fname}
                            onChange={this.inputData}
                            />
                            {/* {this.validator.message("fname",this.state.fname,"required|min:4|max:50")} */}
                        </div>
                        <div className="form-group">
                            <label>
                                Email Address</label>
                                <input type="email" className="form-control" placeholder="Enter email" 
                                 name="userEmail"
                                 value={this.state.userEmail}
                                 onChange={this.inputData}
                                  />
                                {/* {this.validator.message("userEmail",this.state.userEmail,"required|email")}  */}
                        </div>
                        <div className="form-group">
                            <label>
                                Subject</label>
                                <input type="text" className="form-control"  placeholder="Enter subject" 
                                name="subject"
                                value={this.state.subject}
                                onChange={this.inputData}
                                 />
                                 {/* {this.validator.message("subject",this.state.subject,"required|min:3|max:100")} */}
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label>
                                Message</label>
                            <textarea  className="form-control" rows="9"
                             cols="25" 
                             name="message"
                             value={this.state.message}
                             onChange={this.inputData}
                             placeholder="Message"></textarea>
                            {/* {this.validator.message("message",this.state.message,"required|min:5|max:1000")} */}
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <button type="submit" className="btn btn-primary btn-group-lg">
                            Send Message</button>
                    </div>
                  </div>
               </form>
            </div>
        </div>
      </div>
   </div>
  </div>  
      
    );
  };
};
const mapStateToProps=state=>{
    console.log("state",state);
    return {error:state.Contactus.error_message};
    };
export default connect(mapStateToProps,{addContact})(Contact);
