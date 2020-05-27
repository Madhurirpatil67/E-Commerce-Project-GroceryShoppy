import {ADD_CART,REMOVE_CART,LOADING,SHOW_ERROR} from "../../action/cart/cart.type";
import {cartUtility} from "../../action/cart/cart";
const INITIAL_STATE={
    loading:true,
    item:[]
};

export const AddToCart=(state=INITIAL_STATE,action)=>{
 switch(action.type){
     case LOADING:
                    return {...state,loading:state.loading};
     case ADD_CART:
                    return {...state,data:cartUtility(state.item,action.payload),loading:false};
     case REMOVE_CART:
                    return {...state,loading:false,item:state.item.filter(data=>data.data.id!==
                    action.payload._id)}               
     default :
                    return state;                              
 }
}; 