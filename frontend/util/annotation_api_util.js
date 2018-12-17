export const createAnnotation = (annotation) => {
  debugger
  return $.ajax({
    method: "POST",
    url: "api/annotations",
    data: { annotation }
  })
};