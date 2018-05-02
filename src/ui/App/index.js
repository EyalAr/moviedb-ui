import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"
import SearchBar from "../../containers/SearchBar"
import SearchResults from "../SearchResults"

const cx = classnames.bind(style)

const App = ({
  searchResults,
  hasMoreResults,
  onSearch,
  loadNextResultsPageCb
}) => {
  return <div className={cx("container")}>
    <SearchBar onSubmit={onSearch}/>
    <SearchResults
      entries={searchResults || []}
      hasMoreEntries={hasMoreResults}
      loadMoreEntriesCb={loadNextResultsPageCb}/>
  </div>
}

App.propTypes = {
  searchResults: PropTypes.array,
  hasMoreResults: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  loadNextResultsPageCb: PropTypes.func.isRequired
}

App.displayName = "UI/App"

export default App
