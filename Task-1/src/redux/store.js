import {legacy_createStore,combineReducers} from "redux" ;
import { reducer } from "./reducers";

const root_reducer = combineReducers({
    textManager:reducer
  
  });

  export const store=legacy_createStore(root_reducer);