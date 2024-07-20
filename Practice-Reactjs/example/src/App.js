import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
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

    const [newItem, setNewItem] = useState('')

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
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!newItem) return;
      console.log("submitted");
      setNewItem('')
    }
  return (
    <div className='App'>
      <Header  title = "Tamizh's To-do List"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content 
        items = {items}
        handleChange = {handleChange}
        handleDelete = {handleDelete}/>
      <Footer 
        length = {items.length}/>
    </div>
  );
}

export default App;
