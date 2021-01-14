import React, {useState} from 'react'
import './App.css'
import Item from './Item'
import ListItem from "./List"
import TodoForm from "./TodoForm"

function Todo() {

    
    const [items, setItems] = useState([])

    function onAddList(text) {

        let item = new Item(text)

        setItems([...items, item])
    }

    function onDeleteItem(item) {
        let filteredItems = items.filter(listItem=> listItem.idItem !== item.idItem )
        setItems(filteredItems)
    }

    return(
        <div id="container">
            <h1>Todo</h1>
            <TodoForm onAddList={onAddList}/>
            <ListItem onDeleteItem={onDeleteItem} items={items}/>
        </div>
    )
}

export default Todo