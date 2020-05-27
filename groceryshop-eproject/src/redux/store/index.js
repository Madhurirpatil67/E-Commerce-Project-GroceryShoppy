import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import { Registeruser,loggedUser} from "../reducer/user/user";
import {sendContactData} from "../reducer/contact/contact";
import {showProductDetails,showProductDetailsById} from "../reducer/product/product";
import {AddToCart} from "../reducer/cart/cart";

const reducers=combineReducers({register:Registeruser,
                                Contactus:sendContactData,
                                login:loggedUser,
                                details:showProductDetails,
                                detailsById:showProductDetailsById,
                                cart:AddToCart});
export default reducers;

export const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
};