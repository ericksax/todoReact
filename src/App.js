import React from 'react'
import './App.css'
import { useState } from 'react/cjs/react.production.min'

function Todo() {

    const [text, setText] = useState("")

    function addText(event) {
        let t = event.target.value
        setText(t)
    }

    return(
        <div id="container">
            <h1>Todo</h1>
            <form>
                <input type="text" onChange={addText}></input>
                <input type="submit" value="Add"></input>
            </form>
            <ul>
                <li>{text}</li>
            </ul>
        </div>
    )
}

export default Todo