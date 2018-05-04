import transformSearchResults from "./transformSearchResults"

it("should return correct transformed results", () => {
  expect(transformSearchResults([{
    poster_path: "/img.jpg",
    genre_ids: [1, 2]
  }, {
    poster_path: "/img2.jpg",
    genre_ids: [2]
  }], {
    imgBaseUrl: "http://base.com/",
    imgSize: "w300",
    genresMap: {
      1: "a",
      2: "b"
    }
  })).toEqual([{
    poster_path: "http://base.com/w300/img.jpg",
    genre_ids: [1, 2],
    genres: ["a", "b"]
  }, {
    poster_path: "http://base.com/w300/img2.jpg",
    genre_ids: [2],
    genres: ["b"]
  }])
})
