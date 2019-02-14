// need to test
export const createTrackComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `api/tracks/${comment.track_id}/track_comments`,
    data: { comment }
  })
};

export const fetchTrackComments = (track_id) => {
  return $.ajax({
    method: "GET",
    url: `api/tracks/${track_id}/track_comments`
  })
};

export const deleteTrackComment = (trackId, commentId) => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/tracks/${trackId}/track_comments/${commentId}`
  })
};