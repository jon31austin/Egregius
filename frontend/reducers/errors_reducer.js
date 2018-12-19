import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import tracksErrorsReducer from "./track_errors_reducer";
import annotationsErrorsReducer from "./annotations_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tracks: tracksErrorsReducer,
  annotations: annotationsErrorsReducer
});

export default errorsReducer;