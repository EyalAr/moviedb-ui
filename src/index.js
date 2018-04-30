import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"

const root = document.createElement("div")
root.setAttribute("id", "root")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
