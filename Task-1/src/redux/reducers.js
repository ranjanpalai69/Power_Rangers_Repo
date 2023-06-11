import { UPDATE_TEXT } from "./types";

const initialState = {
    text: '',
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TEXT:
        return {
          ...state,
          text: action.payload,
        };
      default:
        return state;
    }
  };