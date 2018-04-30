import apiSearch from "../../../src/api/search"

const API_KEY = process.env.MOVIEDB_API_KEY

describe("api/search", () => {
  describe("with a valid api key", () => {
    var pSearch

    before("make api call", () => {
      pSearch = apiSearch("gone with the wind", API_KEY)
    })

    it("should return a promise", () => {
      expect(pSearch).to.be.a(Promise)
    })

    it("should not reject", () => {
      return pSearch
    })

    it("should resolve with array of entries", () => {
      return pSearch.then(results => {
        expect(results).to.be.an(Array)
      })
    })
  })
})
