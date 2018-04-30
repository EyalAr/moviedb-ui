import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"

import style from "./style.less"

const cx = classnames.bind(style)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: "hello"
    }
  }

  render () {
    return <div>{this.state.message}</div>
  }
}

App.propTypes = {}

App.displayName = "Containers/App"

export default App
