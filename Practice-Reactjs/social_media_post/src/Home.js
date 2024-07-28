import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './Context/DataContext'

const Home = () => {
    const {searchPosts, fetchError, isLoading} = useContext(DataContext)
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading Posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{color:"red"}}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchPosts.length ? 
                <Feed posts ={searchPosts}/>:<p className="statusMsg">No posts to display.</p>
            )}    
        </main>
    )
}

export default Home