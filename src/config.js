const API_BASE = process.env.API_BASE || "https://api.themoviedb.org/3/"

export default {
  endpoints: {
    search: new URL("search/movie", API_BASE).href,
    configuration: new URL("configuration", API_BASE).href,
    genres: new URL("genre/movie/list", API_BASE).href
  },
  imgSizeKey: 4, // the api can provide 7 images sizes, ranging 0-6
  apiDateFormat: "YYYY-MM-DD", // api date format for movie release date
  displayDateFormat: "MMMM Do YYYY"
}
