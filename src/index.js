import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"

import "normalize.css/normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import "./page.less"

if (process.env.DEBUG) {
  // enable debug logs
  localStorage.debug = "moviedb*"
}

const root = document.createElement("div")
root.setAttribute("id", "root")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
