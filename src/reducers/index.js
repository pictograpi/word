import { combineReducers, compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import preview from "./preview";
import article from "./article";
import language from "./language";
import editor from "./editor";

const reducers = combineReducers({ preview, article, language, editor });

const store = createStore(reducers, devToolsEnhancer());

export default store;
