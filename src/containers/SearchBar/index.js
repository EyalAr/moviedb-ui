import React, { Component } from "react"
import PropTypes from "prop-types"

import getInitialState from "./getInitialState"
import SearchBarUI from "../../ui/SearchBar"

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = getInitialState(props.initialQuery)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({
      query: event.target.value
    })
  }

  onSubmit () {
    this.props.onSubmit(this.state.query)
  }

  render () {
    return <SearchBarUI
            query={this.state.query}
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}/>
  }
}

SearchBar.propTypes = {
  initialQuery: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

SearchBar.displayName = "Containers/SearchBar"

export default SearchBar
