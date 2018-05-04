export default apiKey => {
  return {
    apiKey,
    currentQuery: "",
    searchResultsPages: [],
    hasMoreResults: false,
    apiKeyDialogOpen: false,
    isPending: false,
    imgBaseUrl: "",
    imgSize: "",
    genresMap: {}
  }
}
