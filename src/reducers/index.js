import { combineReducers, compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import preview, { activatePreview, deactivatePreview } from "./preview";

const reducers = combineReducers({
  preview
});

const store = createStore(reducers, devToolsEnhancer());

export default store;
