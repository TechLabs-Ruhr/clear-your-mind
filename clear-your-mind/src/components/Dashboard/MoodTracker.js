import React from 'react'
import '../Dashboard/Dashboard.css'
import Header from '../Header'
import Footer from '../Footer'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBRange } from 'mdb-react-ui-kit';
import '../Dashboard/Dashboard.css'

export default function MoodTracker() {
  return (
    <>
     <Header isLine={false}/>
     <div id='mainWrapper'>
        <main id='wrapper'> 
        <h1 id='Greeting'>Track Your Mood</h1> 
        <div id='description'>Drag the slider to assess your current
         mood and click submit my mood </div>

        <MDBRange
        defaultValue={2.5}
        min='0'
        max='6'
        step='1'
        id='customRange3'
        label='Example range'
        />
        </main>
        <div id='sliderLegend'> 
          <div className='sliderLabel'>Terrible </div>
          <div className='sliderLabel'>Bad</div>
          <div className='sliderLabel'>Neutral</div>
          <div className='sliderLabel'>Good</div>
          <div className='sliderLabel'>Very Good</div>
        </div>
     </div>   
     <div className='footer'>
    <Footer/>
    </div>
    </>
  )
}
