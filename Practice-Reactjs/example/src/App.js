import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
    const API_URL = 'http://localhost:3500/items'
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(( ) => {
        const fetchItems = async () => {
          try {
            const response = await fetch(API_URL);
            if(!response.ok) throw Error("Data not received.")
            const listItems = await response.json();
            setItems(listItems)
            setFetchError(null)
          } catch (err) {
            setFetchError(err.message)
          }
          finally{
            setIsLoading(false)
          }
        }
        setTimeout(() => {
          (async () => await fetchItems())()
        }, 2000);
        
    }, [])
    
    const addItem = async (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1 ;
      const addNewItem = {id,checked: false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      
      // create a new item in API
      const postOptions = {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(addNewItem)
      }
      const result = await apiRequest(API_URL, postOptions)
      if(result)setFetchError(result)
    }

    const handleChange = async (id) => {
        const listItems = items.map((item) => 
        item.id === id ? {...item, checked:!item.checked} : item)
        setItems(listItems)
        // update a value in API 
        const myItems = listItems.filter((item) => (item.id === id))
        const updateOptions = {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({checked:myItems[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, updateOptions)
      if(result)setFetchError(result)
    }

    const handleDelete = (id) =>{
        const listItems = items.filter((item) => 
        item.id !== id)
        setItems(listItems)
        // localStorage.setItem("todo_list", JSON.stringify(listItems))
        
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!newItem) return;
      // console.log("submitted");
      addItem(newItem)
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
      <SearchItem 
      search = {search}
      setSearch = {setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
        items = {items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChange = {handleChange}
        handleDelete = {handleDelete}
        />}
      </main>
      
      <Footer 
        length = {items.length}/>
    </div>
  );
}

export default App;
