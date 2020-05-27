import {USER_REGISTER,ERROR,LOGIN_USER,PRE_LOADDER,LOGGED_USER} from "../../action/user/user.type";
import { LoggedUser } from "../../api/user/register";

const INITIAL_STATE=()=>{
  let user=JSON.parse(localStorage.getItem("CurrentUser"));
  return user?{loggedin:true,user}:{};
}
export const loggedUser=(state=INITIAL_STATE,action)=>{
  switch(action.type)
   {
      case LOGIN_USER:
                      return{...state,user:action.payload,loggedin:false};
      case ERROR:
                      return {error_message:action.payload,loggedin:false};
      case PRE_LOADDER:
                      return {loggedin:true}   
      case LOGGED_USER :
                      return {currentuserdata:action.payload,loggedin:false}                             
      default:
                      return state;                   
   }
};

export const Registeruser=(state={},action)=>{
  switch(action.type){
    case USER_REGISTER:
                      return {...state,item:action.payload};
    case ERROR:
                      return {error_message:action.payload};  
    default:
                      return state;    
  }
};

