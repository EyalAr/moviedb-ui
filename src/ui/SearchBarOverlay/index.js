import React, { Component } from "react"
import classnames from "classnames/bind"
import SearchBar from "../../containers/SearchBar"

import style from "./style.less"

const cx = classnames.bind(style)

const SearchBarOverlay = ({
  onSubmit
}) => {
  return <div className={cx("container")}>
    <div className={cx("searchbar-wrapper")}>
      <SearchBar onSubmit={onSubmit}/>
    </div>
  </div>
}

SearchBarOverlay.displayName = "UI/SearchBarOverlay"

export default SearchBarOverlay
