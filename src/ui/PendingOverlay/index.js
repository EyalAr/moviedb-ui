import React, { Component } from "react"
import classnames from "classnames/bind"

import style from "./style.less"

const cx = classnames.bind(style)

const PendingOverlay = () => {
  return <div>please wait...</div>
}

PendingOverlay.displayName = "UI/PendingOverlay"

export default PendingOverlay
