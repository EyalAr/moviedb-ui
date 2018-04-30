import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"

if (process.env.DEBUG) {
  // enable debug logs
  localStorage.debug = "moviedb*"
}

const root = document.createElement("div")
root.setAttribute("id", "root")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
