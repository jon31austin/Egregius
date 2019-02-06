import { combineReducers } from "redux";
import usersReducer from "./entities/users_reducer";
import tracksReducer from "./entities/tracks_reducer";
import annotationsReducer from "./entities/annotations_reducer";
import searchReducer from "./entities/search_reducer";
import trackCommentsReducer from "./entities/track_comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  annotations: annotationsReducer,
  searchResults: searchReducer,
  trackComments: trackCommentsReducer
})

export default entitiesReducer;