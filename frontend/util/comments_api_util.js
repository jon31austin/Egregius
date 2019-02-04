// need to test
export const createTrackComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `api/tracks/${comment.track_id}/track_comments`,
    data: { comment }
  })
};