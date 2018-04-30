import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"

const cx = classnames.bind(style)

const SearchBar = ({
  query,
  onInputChange,
  onSubmit
}) => {
  return (
    <div>
      <input type="text" value={query} onChange={onInputChange}/>
      <input type="button" value="Submit" onClick={onSubmit}/>
    </div>
  )
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

SearchBar.displayName = "UI/SearchBar"

export default SearchBar
