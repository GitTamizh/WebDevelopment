import React from 'react'
import { useState } from 'react';
const Content = () => {

    const [name, setName] = useState("Earn");
        
    function handleNameChange(){
        const names = ["give", "grow", "earn", "save", "invest", "split"];
        const id = Math.floor(Math.random() * names.length);
        setName(names[id])
    }

    return (
        <main>
        <p>Lets {name} money!</p>
        <button onClick={handleNameChange}>Refresh</button>
        </main>
        
    )
}

export default Content