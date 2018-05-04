import update from "immutability-helper"
import generateImgUrl from "./generateImgUrl"

export default (results, {
  imgBaseUrl,
  imgSize,
  genresMap
}) => results.map(r => update(r, {
  poster_path: {
    $set: r.poster_path ? generateImgUrl(r.poster_path, imgSize, imgBaseUrl) : ""
  },
  genres: {
    $set: r.genre_ids.reduce((genres, id) => {
      if (genresMap[id]) {
        genres.push(genresMap[id])
      }
      return genres
    }, [])
  }
}))
