import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items, handleChange, handleDelete}) => {

    return (
    <>
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
    </>
        
    )
}

export default Content