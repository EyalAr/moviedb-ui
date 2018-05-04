import axios from "axios"
import debug from "debug"
import config from "../config"

const log = debug("moviedb:api:getApiConfig")

export default apiKey => {
  log("GET, api_key=%s", apiKey)
  return axios.get(config.endpoints.configuration, {
    params: new URLSearchParams({
      api_key: apiKey
    })
  }).then(response => {
    return response.data
  })
}
