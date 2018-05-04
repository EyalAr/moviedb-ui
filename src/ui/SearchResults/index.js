import React, { Component } from "react"
import InfiniteScroll from "react-infinite-scroller"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import Entry from "./entry"
import Loader from "./loader"
import style from "./style.less"

const cx = classnames.bind(style)

const SearchResults = ({
  entries,
  hasMoreEntries,
  loadMoreEntriesCb
}) => {
  return <div>
    <InfiniteScroll
      loadMore={loadMoreEntriesCb}
      hasMore={hasMoreEntries}
      initialLoad={false}
      loader={ <Loader key={0}/> }>
      { entries.map(entryProps => (
        <Entry key={entryProps.id} {...entryProps}/>
      )) }
    </InfiniteScroll>
  </div>
}

SearchResults.propTypes = {
  entries: PropTypes.array.isRequired,
  hasMoreEntries: PropTypes.bool.isRequired,
  loadMoreEntriesCb: PropTypes.func.isRequired
}

SearchResults.displayName = "UI/SearchResults"

export default SearchResults
