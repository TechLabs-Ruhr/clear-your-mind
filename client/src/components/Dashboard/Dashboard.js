import React from 'react'
import '../Dashboard/Dashboard.css'
import Header from '../Header'
import Footer from '../Footer'
import MoodsOverview from './MoodsOverview'
import DiaryEntriesOverview from './DiaryEntriesOverview'

export default function Dashboard() {
  return (
    <> 
      <Header isLine={false}/>  
      <div id='mainWrapper'> 
        <main id='wrapper'> 
            <h1 id='Greeting'>Good morning, James!</h1> 
            <MoodsOverview/>
            <div style={{padding: "100px 0px 100px 0px"}}> 
              <DiaryEntriesOverview/>
            </div>
        </main>
      </div>  
      <div className='footer'>
    <Footer/>
    </div>
    </>
  )
}
