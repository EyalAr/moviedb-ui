import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"

const cx = classnames.bind(style)

const SearchResults = ({
  entries
}) => {
  return <div>
    { entries.map(entry => (
      <div key={entry.id}>
        {entry.original_title}
      </div>
    )) }
  </div>
}

SearchResults.propTypes = {
  entries: PropTypes.array.isRequired
}

SearchResults.displayName = "UI/SearchResults"

export default SearchResults
