import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import update from "immutability-helper"

import getInitialState from "./getInitialState"
import AppUI from "../../ui/App"
import PendingOverlay from "../../ui/PendingOverlay"
import getApiConfig from "../../api/getApiConfig"
import getMovieGenres from "../../api/getMovieGenres"
import search from "../../api/search"
import flatten from "../../utils/flatten"
import transformSearchResults from "../../utils/transformSearchResults"
import config from "../../config"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = getInitialState(process.env.API_KEY)
    this.setApiKey = this.setApiKey.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onNextPageRequest = this.onNextPageRequest.bind(this)
  }

  componentDidMount () {
    this.setPending()
    Promise.all([
      getApiConfig(this.state.apiKey).then(data => {
        this.setState({
          imgBaseUrl: data.images.secure_base_url,
          imgSize: data.images.poster_sizes[config.imgSizeKey]
        })
      }),
      getMovieGenres(this.state.apiKey).then(genresMap => {
        this.setState({ genresMap })
      })
    ]).catch(err => {
    }).finally(() => {
      this.unsetPending()
    })
  }

  transformSearchResults (results) {
    return transformSearchResults(results, this.state)
  }

  setApiKey (apiKey) {
    this.setState({
      apiKey
    })
  }

  get isApiKeyDialogOpen () {
    return !this.state.apiKey || this.state.apiKeyDialogOpen
  }

  setPending () {
    this.setState({
      isPending: true
    })
  }

  unsetPending () {
    this.setState({
      isPending: false
    })
  }

  onSearch (query) {
    this.setPending()
    this.setState({
      currentQuery: query
    })
    search(query, this.state.apiKey).then(data => {
      this.setState({
        searchResultsPages: [this.transformSearchResults(data.results)],
        hasMoreResults: data.page < data.total_pages
      })
    }).catch(err => {
    }).finally(() => {
      this.unsetPending()
    })
  }

  onNextPageRequest () {
    search(
      this.state.currentQuery,
      this.state.apiKey,
      this.state.searchResultsPages.length
    ).then(data => {
      this.setState(update(this.state, {
        searchResultsPages: {
          $push: [this.transformSearchResults(data.results)]
        },
        hasMoreResults: {
          $set: data.page < data.total_pages
        }
      }))
      this.unsetPending()
    }).catch(err => {
      this.unsetPending()
    })
  }

  render () {
    const {
      apiKey,
      searchResultsPages,
      hasMoreResults,
      isPending,
      imgBaseUrl,
      currentQuery
    } = this.state
    return <AppUI
            isPending={isPending}
            searchResults={flatten(searchResultsPages)}
            hasMoreResults={hasMoreResults}
            currentQuery={currentQuery}
            onSearch={this.onSearch}
            loadNextResultsPageCb={this.onNextPageRequest}/>
  }
}

App.propTypes = {}

App.displayName = "Containers/App"

export default App
