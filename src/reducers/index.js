import { combineReducers, compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import preview from "./preview";
import article from "./article";
import language from "./language";

const reducers = combineReducers({ preview, article, language });

const store = createStore(reducers, devToolsEnhancer());

export default store;
