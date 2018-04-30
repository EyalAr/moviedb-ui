import apiSearch from "./search"

const API_KEY = process.env.API_KEY

it("should resolve with array of entries", () => {
  return apiSearch("gone with the wind", API_KEY).then(data => {
    expect(data.page).toBe(1)
    expect(data.results instanceof Array).toBe(true)
  })
})
