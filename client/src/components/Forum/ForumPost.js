import React from 'react'
import '../Forum/Forum.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Comment } from '@icon-park/react';

export default function ForumPost(props) {
  return (
   <> <div className='PostContainer'> 
        <h2 className='PostHeader'>{props.title}</h2>
        <div className='PostElementsContainer'>
            <div className='PostDescription'>{props.description}</div>   
        </div>
        <div className='PostFooter'>
          <div className='FirstElementSet'>
            <div className='UserIconContainer'> 
              <AccountCircleIcon sx={{ fontSize: "70px" }}/> 
            </div>
            <div className='PostAuthor'>{props.username}</div>
            <div className='PostAuthor'>12hr ago</div>
          </div>
          <div className='SecondElementSet'> 
            <div className='CommentIConContainer'>
              <Comment theme="outline" size="54" fill="#333"/>
            </div>
            <div className='CommmentsQuantity'>10+ </div>
          </div>
        </div>
   </div> </>
  )
}
