import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import lyricsReducer from "./lyrics_reducer";

const uiReducer = combineReducers({
  modal: modalReducer,
  lyrics: lyricsReducer
});


export default uiReducer;