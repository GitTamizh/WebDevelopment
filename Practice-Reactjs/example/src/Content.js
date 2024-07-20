import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items, handleChange, handleDelete}) => {

    return (
        <main>
            {(items.length) ? (
            <ItemsList 
                items = {items}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
            />
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