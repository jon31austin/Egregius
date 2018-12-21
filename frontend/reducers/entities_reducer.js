import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tracksReducer from "./tracks_reducer";
import annotationsReducer from "./annotations_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  annotations: annotationsReducer,
  searchResults: searchReducer
})

export default entitiesReducer;