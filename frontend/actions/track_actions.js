import * as TrackApiUtil from "../util/track_api_util";

export const RECEIVE_NEXT_TRACKS = "RECEIVE_NEXT_TRACKS";
export const RECEIVE_TRACKS_ERRORS = "RECEIVE_TRACKS_ERRORS";

const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_NEXT_TRACKS,
    tracks
  }
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_TRACKS_ERRORS,
    errors
  }
};

export const getTracks = (offset) => dispatch => {
  return TrackApiUtil.getTracks(offset)
    .then( tracks => dispatch(receiveTracks(tracks)),
           err => dispatch(receiveErrors(err))
    )
};

export const getSingleTrack = (id) => dispatch => {
  return TrackApiUtil.getSingleTrack(id)
    .then( track => dispatch(receiveTracks(track)),
          err => dispatch(receiveErrors(err))
    )
};

export const createTrack = (track) => dispatch => {
  return TrackApiUtil.createTrack(track)
    .then(track => dispatch(receiveTracks(track)),
      err => dispatch(receiveErrors(err))
    )
};