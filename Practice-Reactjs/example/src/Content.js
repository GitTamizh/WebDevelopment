import React from 'react'
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState(
        [
            {id:1,
            checked: true,
            item: "practice coding"
            },
            {id:2,
            checked: false,
            item: "playing"
            },
            {id:3,
            checked: false,
            item: "learning AI"
            }
        ])

    const handleChange = (id) => {
        const listItems = items.map((item) => 
        item.id === id ? {...item, checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleDelete = (id) =>{
        const listItems = items.filter((item) => 
        item.id !== id)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
        
    }

    return (
        <main>
            {(items.length) ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                        type="checkbox" 
                        onChange={() => handleChange(item.id)}
                        checked = {item.checked}
                        />
                        <label
                        style={(item.checked)?{textDecoration:'line-through'} : null}
                        onDoubleClick={() => handleChange(item.id)}>{item.item}</label>
                        <FaRegTrashAlt 
                            role = "button"
                            // className='deleteBtn'
                            onClick={ () => handleDelete(item.id)}
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        ) : (
            <p style={
                {
                    marginTop:"2rem",
                    color:"red"
                }
            }>Your list is empty</p>
        )
    }
        </main>
        
    )
}

export default Content