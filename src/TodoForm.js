import React, {useState} from "react"


function TodoForm(props){

    const [text, setText] = useState("")

    function addText(event) {
        let t = event.target.value
        setText(t)
    }

    function addListItem(event) {
        event.preventDefault()
        if(text) {
            props.onAddList(text)
            setText("")
        }
    }

    return (
        <form>
            <input type="text" onChange={addText} value={text}></input>
            <button onClick={addListItem}>Add</button>
        </form>
    )
}

export default TodoForm