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

export const updateAnnotation = (ann) => {
  return $.ajax({
    method: "PATCH",
    url: `api/annotations/${ann.id}`,
    data: { annotation: ann }
  })
};

export const deleteAnnotation = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/annotations/${id}`
  })
};