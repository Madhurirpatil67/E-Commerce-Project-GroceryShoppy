import {fetchProduct,fetchProductById} from "../../api/productApi/productdata";
import { LOADING, FETCH_PRODUCT_DATA, SHOW_ERROR,FETCH_PRODUCT_DATA_ID } from "./product.type";

export const productInfo=()=>{
    return async dispatch=>{
        try{
            dispatch({type:LOADING});
            let response =await fetchProduct();
            setTimeout(()=>{
                dispatch({type:FETCH_PRODUCT_DATA,payload:response.data});
            },1000);
            
        }
        catch(ex){
            dispatch({type:SHOW_ERROR,payload:ex.response.data});
        }
    }
};

export const productInfoById=(id)=>{
    return async dispatch=>{
        try{
            dispatch({type:LOADING});
            let response =await fetchProductById(id);
            console.log("productById:"+response.data);
            setTimeout(()=>{
                dispatch({type:FETCH_PRODUCT_DATA_ID,payload:response.data});
            },1000);
           
        }
        catch(ex){
            dispatch({type:SHOW_ERROR,payload:ex.response.data});
        }
    }
};

