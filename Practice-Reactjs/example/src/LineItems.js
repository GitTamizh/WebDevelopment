import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const LineItems = ({item, handleChange, handleDelete}) => {
    return (
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
                    aria-label={`Dlete ${item.item}`}
                />
            </li>
    )
}

export default LineItems