export default apiKey => {
  return {
    apiKey,
    searchResults: [],
    searchQuery: "",
    apiKeyDialogOpen: false,
    isPending: false
  }
}
