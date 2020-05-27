import axios from "axios";
const ContactDetails_ENDPOINT="http://localhost:5000/api/sendMail";
let config={
    header:{
        "Content-Type":"application/json"
    }
};

export const contactInfo=(data)=>{
     return axios.post(ContactDetails_ENDPOINT,(data),config);
};