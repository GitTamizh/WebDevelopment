import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names = ["give", "grow", "earn", "save", "invest", "split"];
        const id = Math.floor(Math.random() * names.length);
        return names[id];
    }

    const handleClick = (e) => {
        console.log(e.target.innerText);
    }
    const handleClick2 = (name) =>{
        console.log(`Thanks for the Support ${name}`);
    }

    return (
        <main>
        <p onDoubleClick={() => handleClick2('Tamizh')}>Lets {handleNameChange()} money!</p>
        <button onClick={(e) => handleClick(e)}>Refresh</button>
        </main>
        
    )
}

export default Content