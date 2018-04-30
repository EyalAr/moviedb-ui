import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"
import SearchBar from "../../containers/SearchBar"
import SearchResults from "../SearchResults"

const cx = classnames.bind(style)

const App = ({
  searchResults,
  onSearch
}) => {
  return <div>
    <SearchBar onSubmit={onSearch}/>
    <SearchResults entries={searchResults || []}/>
  </div>
}

App.propTypes = {
  searchResults: PropTypes.array,
  onSearch: PropTypes.func.isRequired
}

App.displayName = "UI/App"

export default App
