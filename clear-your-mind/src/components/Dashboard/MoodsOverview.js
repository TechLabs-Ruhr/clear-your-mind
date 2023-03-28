import React from 'react'
import Button from '../smallComponents/Button'
import '../Dashboard/Dashboard.css'
import { useNavigate } from 'react-router-dom';


export default function MoodsOverview() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/MTD/moodTracker');
  }
  
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
         <Button route="moodTracker"
          padding="5px" 
          fontSize="16px"
          width="200px" 
          title="Track My Mood"
          onClick={handleClick}
          />
         </div>
    </div>
  )
}
