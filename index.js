import React from "react"

import { render } from "react-dom"

import "./index.css"

import Home from "./src/views/home"

const root = document.getElementById("root")


const App = () => {
    return <div>
        <Home />
    </div>
}

render(<App />, root)
