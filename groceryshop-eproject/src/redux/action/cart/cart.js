import {fetchProductById} from "../../api/productApi/productdata";
import {ADD_CART,REMOVE_CART,SHOW_ERROR,LOADING} from "./cart.type";
import {history} from "../../../shared/helpers/history/index";

export const addToCart=(id)=>{
    return async dispatch=>{
        try{
            dispatch({type:LOADING});
            let response =await fetchProductById(id);
            console.log("addcart:"+response.data);
            setTimeout(()=>{
                dispatch({type:ADD_CART,payload:response.data});
                history.push("/cart");
                //window.location.reload();
            },1000);
           
        }
        catch(ex){
            dispatch({type:SHOW_ERROR,payload:ex.response.data});
        }
    }
};

export const removeToCart=(id)=>{
    return async dispatch=>{
        try{
            dispatch({type:LOADING});
            let response =await fetchProductById(id);
            setTimeout(()=>{
                dispatch({type:REMOVE_CART,payload:response.data});
               
            },1000);
           
        }
        catch(ex){
            dispatch({type:SHOW_ERROR,payload:ex.response.data});
        }
    }
};

export const cartUtility=(oldstate,nextstate)=>{
    console.log("oldstate:"+oldstate);
    const existingCartItems=oldstate.find(data=>data.data._id===nextstate.data_id);
    console.log("cartItems:"+existingCartItems);
     if(existingCartItems)
     {
       return oldstate.map(cartItem=>
        cartItem.data._id===nextstate.data._id?{
            ...cartItem,Quantity:cartItem.Quantity+1
        }:cartItem);
     }
    return [...oldstate,{...nextstate,Quantity:1}];
}