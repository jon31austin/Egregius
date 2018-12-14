export const getTracks = (offset) => {
  return $.ajax({
    method: "GET",
    url: "api/tracks",
    data: offset
  })
}