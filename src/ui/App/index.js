import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"
import SearchBar from "../../containers/SearchBar"
import SearchResults from "../SearchResults"
import PendingOverlay from "../PendingOverlay"
import SearchBarOverlay from "../SearchBarOverlay"

const cx = classnames.bind(style)

const App = ({
  isPending,
  searchResults,
  hasMoreResults,
  currentQuery,
  onSearch,
  loadNextResultsPageCb
}) => {
  const isSearchOverlayOpen = !isPending && searchResults.length === 0
  return <Fragment>
    <div className={cx("container")}>
      {
        !isSearchOverlayOpen &&
        <div className={cx("content")}>
          <SearchBar onSubmit={onSearch} initialQuery={currentQuery}/>
          <SearchResults
            entries={searchResults || []}
            hasMoreEntries={hasMoreResults}
            loadMoreEntriesCb={loadNextResultsPageCb}/>
        </div>
      }
    </div>
    { isSearchOverlayOpen && <SearchBarOverlay onSubmit={onSearch}/> }
    { isPending && <PendingOverlay/> }
  </Fragment>
}

App.propTypes = {
  searchResults: PropTypes.array,
  hasMoreResults: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  currentQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  loadNextResultsPageCb: PropTypes.func.isRequired
}

App.displayName = "UI/App"

export default App
