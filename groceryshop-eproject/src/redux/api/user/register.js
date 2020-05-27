import axios from "axios";
import { Header } from "../../../shared/helpers/history/header";
const Register_ENDPOINT="http://localhost:5000/api/register";
const Login_ENDPOINT="http://localhost:5000/api/login";
const LoggedIn_ENDPOINT="http://localhost:5000/api/me";

let config={
    headers:{
        "Content-Type":"application/json"
    }
};

export const userRegisters=(data)=>{
   return axios.post(Register_ENDPOINT,JSON.stringify(data),config)
};

export const userLogin=(data)=>{
    return axios.post(Login_ENDPOINT,JSON.stringify(data),config);
}

export const LoggedUser=()=>{
    return axios.get(LoggedIn_ENDPOINT,{headers:Header(),config});
}