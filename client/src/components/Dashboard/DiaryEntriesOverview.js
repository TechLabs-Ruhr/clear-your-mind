import React from 'react'
import Button from '../smallComponents/Button'
import '../Dashboard/Dashboard.css'

export default function DiaryEntriesOverview() {
  return (
    <div className='overviewContainer'>
        <h3 className="overviewHeader">Recently Submitted Diary Entries</h3>
        <div className='table'>
            <div className='tableHeadersContainer'> 
                <div className='tableHeader1'>Date</div>
                <div className='tableHeader2'>Title</div>
            </div> 
            <ul>

            </ul>
        </div>
        <div style={{paddingLeft: "2%"}}> 
         <Button route="moodTracker" padding="5px"  fontSize="16px" width="200px" title="Add A New Diary Entry"/>
         </div>
    </div>
  )
}
