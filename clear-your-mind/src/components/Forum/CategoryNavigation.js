import React from 'react'
import  Button  from '../smallComponents/Button';
import '../Forum/Forum.css';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react'


export default function CategoryNavigation() {

  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    /*
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })*/
  }, [])

  return (
    <>
    <div id='main'> 
      <h1 className='mainHeader'>Depression</h1>
      <div id='buttonContainer'>
        <Button width="100%" root="#" title="Switch Category"/> 
        <Button root="#" title="Start a New Topic"/> 
        <SearchBar posts={posts} setSearchResults={setSearchResults}/>
      </div>
      
    </div>
    </>
  )
}
