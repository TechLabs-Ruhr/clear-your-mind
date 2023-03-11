import React from 'react'
import '../Forum/Forum.css';

export default function EditPost() {
  return (
    <>
        <div id='EditPostContainer'> 
            <div id='elementsContainer'>
                <h2 id='EditorHeader'>Create Post</h2>    
                <input id='Title' placeholder='Title'/>
                <textarea id='Description' placeholder='Description..'/>
            </div>
        
        </div>
    </>
  )
}
