import axios from "axios";
const PRODUCT_ENDPOINT="http://localhost:5000/api/allProducts";
const FETCH_PRODUCT_BY_ID_ENDPOINT="http://localhost:5000/api/getProduct/";

let config={
    header:{
        "Content-Type":"application/json"
    }
};

export const fetchProduct=()=>{
    return axios.get(PRODUCT_ENDPOINT,config);
};

export const fetchProductById=(id)=>{
  return axios.get(FETCH_PRODUCT_BY_ID_ENDPOINT+id,config);
};