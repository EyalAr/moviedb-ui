import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"

const cx = classnames.bind(style)

const ApiKeyDialog = ({
  initialValue,
  onSubmit
}) => {
  return <div>
    { initialValue }
  </div>
}

ApiKeyDialog.propTypes = {
  initialValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

ApiKeyDialog.displayName = "UI/ApiKeyDialog"

export default ApiKeyDialog