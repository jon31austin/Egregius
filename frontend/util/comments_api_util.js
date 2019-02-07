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