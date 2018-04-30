const API_BASE = process.env.API_BASE || "https://api.themoviedb.org/3/"

export default {
  endpoints: {
    search: new URL("search/movie", API_BASE).href
  }
}
