import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

import getInitialState from "./getInitialState"
import ApiKeyDialog from "../../ui/ApiKeyDialog"
import AppUI from "../../ui/App"
import search from "../../api/search";

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

  onSearch (query) {
    search(query, this.state.apiKey).then(data => {
      this.setState({
        searchResults: data.results
      })
    })
  }

  render () {
    const {
      apiKey,
      searchQuery,
      searchResults
    } = this.state
    return <Fragment>
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
