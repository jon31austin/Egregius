import * as TrackApiUtil from "../util/track_api_util";

export const RECEIVE_NEXT_TRACKS = "RECEIVE_NEXT_TRACKS";

const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_NEXT_TRACKS,
    tracks
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
};

export const getTracks = (offset) => {
  return TrackApiUtil.getTracks(offset)
    .then( tracks => dispatch(receiveTracks(tracks)),
           err => dispatch(receiveErrors(err))
    )
}