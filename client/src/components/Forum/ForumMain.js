import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import '../Forum/Forum.css';
import CategoryNavigation from './CategoryNavigation';
import EditPost from './EditPost';
import ListOfPosts from './ListOfPosts';
import { useState } from 'react';
import Axios from 'axios'

export default function ForumMain() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((response) => {
      const sortedData = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setList(sortedData);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
  }, []);

  return ( <>
    <Header isLine={false}/>
    <main className='main2'>
        <CategoryNavigation/>
        <EditPost setList={setList} list={list}/>
        <ListOfPosts posts={list}/>
    </main>
    <div className='footer'>
    <Footer/>
    </div>
  </>
  )
}
