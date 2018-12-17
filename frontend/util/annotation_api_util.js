export const createAnnotation = (annotation) => {
  return $.ajax({
    method: "POST",
    url: "api/annotations",
    data: { annotation }
  })
};

export const fetchAnnotations = (trackId) => {
  return $.ajax({
    method: "GET",
    url: "api/annotations",
    data: { track_id: trackId }
  })
};