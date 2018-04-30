import axios from "axios"
import debug from "debug"
import config from "../config"

const log = debug("moviedb:api:search")

export default (query, apiKey, page = 1, includeAdult = false) => {
  log("GET %s, query=%s, page=%s, include_adult=%s, api_key=%s",
    config.endpoints.search, query, page, includeAdult, apiKey)
  return axios.get(config.endpoints.search, {
    params: new URLSearchParams({
      api_key: apiKey,
      query,
      page,
      include_adult: includeAdult
    })
  }).then(response => {
    return response.data
  })
}
