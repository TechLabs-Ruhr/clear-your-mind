import React from 'react'
import '../Dashboard/Dashboard.css'
import Header from '../Header'
import Footer from '../Footer'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBRange } from 'mdb-react-ui-kit';

export default function MoodTracker() {
  return (
    <>
     <Header isLine={false}/>
     <div id='mainWrapper'>
        <main id='wrapper'> 
        <MDBRange
        defaultValue={2.5}
        min='0'
        max='5'
        step='0.5'
        id='customRange3'
        label='Example range'
        />
        </main>
     </div>   
     <div className='footer'>
    <Footer/>
    </div>
    </>
  )
}
