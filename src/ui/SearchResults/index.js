import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import Entry from "./entry"
import style from "./style.less"

const cx = classnames.bind(style)

const SearchResults = ({
  entries
}) => {
  return <div>
    { entries.map(({
      id,
      title,
      overview,
      poster_path,
      release_date
    }) => (
      <Entry key={id} title={title} date={release_date}/>
    )) }
  </div>
}

SearchResults.propTypes = {
  entries: PropTypes.array.isRequired
}

SearchResults.displayName = "UI/SearchResults"

export default SearchResults
