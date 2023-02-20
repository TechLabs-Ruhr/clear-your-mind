import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import '../Forum/Forum.css';
import CategoryNavigation from './CategoryNavigation';
import EditPost from './EditPost';

export default function ForumMain() {
  return ( <>
    <Header isLine={false}/>
    <main className='main2'>
        <CategoryNavigation/>
        <EditPost/>
    </main>
    <div className='footer'>
    <Footer/>
    </div>
  </>
  )
}
