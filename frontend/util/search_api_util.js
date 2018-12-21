export const searchDatabase = (search) => {
  return $.ajax({
    method: "GET",
    url: "/api/searches",
    data: {
      search_string: search.searchString,
      search_field: search.searchField
    }
  })
};