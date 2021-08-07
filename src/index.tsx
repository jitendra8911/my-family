import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from "./components/Hello";
import {Welcome} from "./components/HookExample";
import StatefulHello from "./components/StatefulHello";
import {createStore, compose, applyMiddleware, combineReducers, Store} from "redux";
import {StoreState} from "./types";
import {enthusiasm} from "./reducers";
import {EnthusiasmAction} from "./actions";
import createSagaMiddleware from 'redux-saga';
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const rootReducer = combineReducers({enthusiasm});

const store = createStore(enthusiasm as any, {
    enthusiasmLevel: 1,
    languageName: 'Typescript'
}, compose(applyMiddleware(...middleware)));


console.log('store ', store.getState());

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
