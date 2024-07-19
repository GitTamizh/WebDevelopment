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
    

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                        type="checkbox" 
                        checked = {item.checked}
                        />
                        <label>{item.item}</label>
                        <FaRegTrashAlt 
                            role = "button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        </main>
        
    )
}

export default Content