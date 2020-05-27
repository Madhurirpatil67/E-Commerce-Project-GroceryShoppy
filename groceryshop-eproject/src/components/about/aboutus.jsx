import React,{Component} from "react";
import about from  "../../assets/about.jpg";
import about2 from  "../../assets/about2.jpg";

class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12"
                       style={{fontSize:30,fontWeight:600}}>
                        Welcome to our Site
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6">
                    <img
                        className="d-block w-100"
                        src={about}
                        alt="about"
                        style={{height:"500px"}}
                        />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xl-6">
                    <img
                        className="d-block w-100"
                        src={about2}
                        alt="about2"
                        style={{height:"500px"}}
                        />
                    </div>
                </div>
            </div>
        )
    }
};
export default About;