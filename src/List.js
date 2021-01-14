import React from "react"
// import  "./App"
import "./List.css"

function List(props) {
  
    return (
    <ul>
        {props.items.map(item=> 
        <li key={item.idItem}>
            {item.text}
            <button onClick={()=>{props.onDeleteItem(item)}}><img src="./assets/exclude2.png" alt="Exclude"></img></button>
        </li>)}
     </ul>)
}

export default List