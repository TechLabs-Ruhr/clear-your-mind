import React from 'react'
import '../Forum/Forum.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Comment } from '@icon-park/react';

export default function ForumPost(props) {
   // Format the timestamp to a user-friendly string
  const formatTimeAgo = (dateString) => {
    const postDate = new Date(dateString);
    const now = new Date();
    
    // Time difference in milliseconds
    const diffMs = now - postDate;
    
    // Convert to minutes, hours, days
    const diffSecs = Math.round(diffMs / 1000);
    const diffMins = Math.round(diffMs / (1000 * 60));
    const diffHrs = Math.round(diffMs / (1000 * 60 * 60));
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    
    // Return appropriate string based on time difference
    if (diffSecs < 60) {
      return "Just now";
    } else if (diffMins < 60) {
      return `${diffMins}min ago`;
    } else if (diffHrs < 24) {
      return `${diffHrs}hr ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
  
      return postDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    }
  };

  return (
   <> <div className='PostContainer'> 
        <h2 className='PostHeader'>{props.title}</h2>
        <div className='PostElementsContainer'>
            <div className='PostDescription'>{props.description}</div>   
        </div>
        <div className='PostFooter'>
          <div className='FirstElementSet'>
            <div className='IconUsernameContainer'>
              <div className='UserIconContainer'> 
                <AccountCircleIcon sx={{ fontSize: "70px" }}/> 
              </div>
              <div className='PostAuthor'>{props.username}</div>
            </div>  
            <div className='PostAuthor'>{props.uploadTime ? formatTimeAgo(props.uploadTime) : "Just now"}</div>
          </div>
          <div className='SecondElementSet'> 
            <div className='CommentIConContainer'>
              <Comment theme="outline" size="54" fill="#333"/>
            </div>
            <div className='CommmentsQuantity'>10+</div>
          </div>
        </div>
   </div> </>
  )
}
