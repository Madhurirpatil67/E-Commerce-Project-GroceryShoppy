import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import {persistStore,persistReducer} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import thunk from "redux-thunk";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reducers from './redux/store';
import {persistConfig} from "././redux/store/index";
const persistedReducers=persistReducer(persistConfig,reducers);
const store=createStore(persistedReducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
          <PersistGate
            loading={<h1>LOADING.....</h1>}
            persistor={persistStore(store)}>
              <App/>
            </PersistGate> 
       </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root'));

serviceWorker.unregister();
