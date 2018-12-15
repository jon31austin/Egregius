export const getTracks = (offset) => {
  return $.ajax({
    method: "GET",
    url: "api/tracks",
    data: { offset: offset }
  })
};

export const getSingleTrack = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/tracks/${id}`
  })
};

export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "api/tracks",
    data: { track }
  })
};