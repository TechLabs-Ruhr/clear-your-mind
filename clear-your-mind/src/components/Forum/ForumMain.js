import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import '../Forum/Forum.css';
import CategoryNavigation from './CategoryNavigation';
import EditPost from './EditPost';
import ForumPost from './ForumPost';

export default function ForumMain() {
  return ( <>
    <Header isLine={false}/>
    <main className='main2'>
        <CategoryNavigation/>
        <EditPost/>
        <ForumPost/>
    </main>
    <div className='footer'>
    <Footer/>
    </div>
  </>
  )
}
