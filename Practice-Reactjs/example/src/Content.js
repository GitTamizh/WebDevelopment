import React from 'react'

import { FaRegTrashAlt } from "react-icons/fa";

const Content = ({items, handleChange, handleDelete}) => {

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