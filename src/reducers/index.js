import { combineReducers, compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import preview from "./preview";
import article from "./article";

const reducers = combineReducers({ preview, article });

const store = createStore(reducers, devToolsEnhancer());

export default store;
