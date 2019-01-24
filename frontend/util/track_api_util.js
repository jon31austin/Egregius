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

export const createTrack = (formData) => {
  return $.ajax({
    method: "POST",
    url: "api/tracks",
    data: formData,
    contentType: false,
    processData: false
  })
};

// used to have { track } nested