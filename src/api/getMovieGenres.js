import axios from "axios"
import debug from "debug"
import config from "../config"

const log = debug("moviedb:api:getMovieGenres")

export default apiKey => {
  log("GET, api_key=%s", apiKey)
  return axios.get(config.endpoints.genres, {
    params: new URLSearchParams({
      api_key: apiKey
    })
  }).then(response => {
    return (
      response.data ? response.data.genres : []
    ).reduce((genres, entry) => {
      genres[entry.id] = entry.name
      return genres
    }, {})
  })
}
