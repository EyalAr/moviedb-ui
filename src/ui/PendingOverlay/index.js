import React, { Component } from "react"
import classnames from "classnames/bind"
import { Intent, Spinner } from "@blueprintjs/core";

import style from "./style.less"

const cx = classnames.bind(style)

const PendingOverlay = () => {
  return <div className={cx("container")}>
    <div className={cx("spinner")}>
      <Spinner intent={Intent.PRIMARY}/>
    </div>
  </div>
}

PendingOverlay.displayName = "UI/PendingOverlay"

export default PendingOverlay
