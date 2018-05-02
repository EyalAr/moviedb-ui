import React, { Component } from "react"
import classnames from "classnames/bind"
import { Intent, Spinner } from "@blueprintjs/core";

import style from "./loader.less"

const cx = classnames.bind(style)

const Loader = () => {
  return <div className={cx("container")}>
    <div className={cx("spinner")}>
      <Spinner intent={Intent.PRIMARY} small/>
    </div>
  </div>
}

Loader.displayName = "UI/SearchResults/Loader"

export default Loader
