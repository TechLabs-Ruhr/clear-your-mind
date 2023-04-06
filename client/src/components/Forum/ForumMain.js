import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import '../Forum/Forum.css';
import CategoryNavigation from './CategoryNavigation';
import EditPost from './EditPost';
import ForumPost from './ForumPost';
import ListOfPosts from './ListOfPosts';
import { useState } from 'react';
import Axios from 'axios'

export default function ForumMain() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  }, []);
  
/*
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
*/
  return ( <>
    <Header isLine={false}/>
    <main className='main2'>
        <CategoryNavigation/>
        <EditPost /*titleValue={titleValue} descriptionValue={descriptionValue}*/ setList={setList} list={list}/>
        <ListOfPosts posts={list}/>
    </main>
    <div className='footer'>
    <Footer/>
    </div>
  </>
  )
}
