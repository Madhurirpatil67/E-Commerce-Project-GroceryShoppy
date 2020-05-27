import {LOADING,SHOW_ERROR,FETCH_PRODUCT_DATA,FETCH_PRODUCT_DATA_ID} from "../../action/product/product.type";

export const showProductDetails=(state={},action)=>{
    switch(action.type)
    {
      case LOADING:
                   return {loading:true};
       case FETCH_PRODUCT_DATA:
                    return {...state,item:action.payload,loading:false};
       case SHOW_ERROR:
                    return {error:action.payload,loading:false};
       default :
                    return state;
     }   
};

export const showProductDetailsById=(state={},action)=>{
  switch(action.type)
  {
    case LOADING:
                 return {loading:true};
     case FETCH_PRODUCT_DATA_ID:
                  return {...state,item:action.payload,loading:false};
     case SHOW_ERROR:
                  return {error:action.payload,loading:false};
     default :
                  return state;
   }   
};