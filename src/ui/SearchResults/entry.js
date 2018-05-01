import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./entry.less"

const cx = classnames.bind(style)

const Entry = ({
  title, date
}) => {
  return <div>
    { title }, { date }
  </div>
}

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

Entry.displayName = "UI/SearchResults/Entry"

export default Entry
