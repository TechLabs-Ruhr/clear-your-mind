import React from 'react'
import Button from '../smallComponents/Button'
import '../Dashboard/Dashboard.css'


export default function MoodsOverview() {
  return (
    <div className='overviewContainer'>
        <h3 className="overviewHeader">Recently Submitted Moods</h3>
        <div className='table'>
            <div className='tableHeadersContainer'> 
                <div className='tableHeader1'>Date</div>
                <div className='tableHeader2'>Mood</div>
            </div> 
            <ul>

            </ul>
        </div>
        <div style={{paddingLeft: "2%"}}> 
         <Button route="moodTracker" padding="5px"  fontSize="16px" width="200px" title="Track My Mood"/>
         </div>
    </div>
  )
}
