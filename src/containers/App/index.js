import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import update from "immutability-helper"

import getInitialState from "./getInitialState"
import ApiKeyDialog from "../../ui/ApiKeyDialog"
import AppUI from "../../ui/App"
import PendingOverlay from "../../ui/PendingOverlay"
import search from "../../api/search"
import flatten from "../../utils/flatten"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = getInitialState(process.env.API_KEY)
    this.setApiKey = this.setApiKey.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onNextPageRequest = this.onNextPageRequest.bind(this)
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
        searchResultsPages: [data.results],
        hasMoreResults: data.page < data.total_pages
      })
      this.unsetPending()
    }).catch(err => {
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
        searchResultsPages: { $push: [data.results] },
        hasMoreResults: { $set: data.page < data.total_pages }
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
      isPending
    } = this.state
    return <Fragment>
      {
        this.state.isPending &&
        <PendingOverlay/>
      }
      {
        this.isApiKeyDialogOpen &&
        <ApiKeyDialog
          initialValue={apiKey}
          onSubmit={this.setApiKey}/>
      }
      <AppUI
        searchResults={flatten(searchResultsPages)}
        hasMoreResults={hasMoreResults}
        onSearch={this.onSearch}
        loadNextResultsPageCb={this.onNextPageRequest}/>
    </Fragment>
  }
}

App.propTypes = {}

App.displayName = "Containers/App"

export default App
