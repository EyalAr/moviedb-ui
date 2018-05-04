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
  const onKeyUp = event => {
    if (event.key === "Enter") {
      onSubmit()
    }
  }

  return (
    <div className={cx("container")}>
      <div className={cx("pt-input-group")}>
        <span className={cx("pt-icon", "pt-icon-search")}></span>
        <input
          className={cx("pt-input")}
          type="search"
          placeholder="Search a movie"
          dir="auto"
          value={query}
          onChange={onInputChange}
          onKeyUp={onKeyUp}/>
      </div>
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
