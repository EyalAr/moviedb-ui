import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

import getInitialState from "./getInitialState"
import ApiKeyDialog from "../../ui/ApiKeyDialog"
import AppUI from "../../ui/App"
import PendingOverlay from "../../ui/PendingOverlay"
import search from "../../api/search"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = getInitialState(process.env.API_KEY)
    this.setApiKey = this.setApiKey.bind(this)
    this.onSearch = this.onSearch.bind(this)
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
    search(query, this.state.apiKey).then(data => {
      this.setState({
        searchResults: data.results
      })
      this.unsetPending()
    }).catch(err => {
      this.unsetPending()
    })
  }

  render () {
    const {
      apiKey,
      searchQuery,
      searchResults,
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
        searchQuery={searchQuery}
        searchResults={searchResults}
        onSearch={this.onSearch}/>
    </Fragment>
  }
}

App.propTypes = {}

App.displayName = "Containers/App"

export default App
