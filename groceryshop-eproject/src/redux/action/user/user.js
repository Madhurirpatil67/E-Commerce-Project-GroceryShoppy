import {USER_REGISTER,ERROR,LOGIN_USER, LOGOUT, LOGGED_USER,PRE_LOADDER} from "./user.type";
import {userRegisters,userLogin,LoggedUser} from "../../api/user/register";
import {history} from "../../../shared/helpers/history/index";

export const LoginUser=(item)=>{
   return async dispatch=>{
     try{
        let loginInfo=await userLogin(item);
        localStorage.setItem("CurrentUser",JSON.stringify(loginInfo));
        dispatch({type:LOGIN_USER,payload:loginInfo.data})
        alert("Login Done!!");
        dispatch({type:PRE_LOADDER});
        history.push("/home");
        window.location.reload();
     }
     catch(ex)
     {
       dispatch({type:ERROR,payload:ex.response.data});
     }
   }
};

export const logOut=()=>{
  return async dispatch=>{
    localStorage.removeItem("CurrentUser");
    dispatch({type:LOGOUT});
    history.push("/login");
    window.location.reload();
  }
}

export const UserRegister=(item)=>{
  return async dispatch=>{
    try{
      let SendData=await userRegisters(item);
      dispatch({type:USER_REGISTER,payload:SendData.data});
      alert("Registration Done Successfully!!");
      history.push("/login");
      window.location.reload();
    }
    catch(ex){
      dispatch({type:ERROR,payload:ex.response.data});
    }  
  }
};

export const loggedInUser=()=>{
  return async dispatch=>{
    try{
        let fetchloggedindata=await LoggedUser();
        dispatch({type:LOGGED_USER,payload:fetchloggedindata.data});
    }
    catch(ex)
    {
      dispatch({type:ERROR,payload:ex.response.data});
    }
  }
}

