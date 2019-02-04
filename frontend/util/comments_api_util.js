// need to test
export const createTrackComment = (comment) => {
  return $.ajax({
    method: "POST",
    utl: `api/tracks/${comment.track_id}/track_comments`,
    data: { comment }
  })
};