import React, {useEffect} from 'react'
import '../Forum/Forum.css';
import Button from '../smallComponents/Button';
import { useState } from 'react';
import Axios from 'axios'

export default function EditPost({ setList, list }) {

  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [username, setUsername] = useState('');
 
  const handleTitleChange = event => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescriptionValue(event.target.value);
  };

  useEffect(()=> {
    Axios.get("http://localhost:3002/login", { withCredentials: true }).then((response) => {
      setUsername(response.data.username);
    })
  }, [])


  function handleSubmit(event) {
    event.preventDefault();
    
    if (titleValue.trim() && descriptionValue.trim()) {
      const now = new Date();
      const currentDate = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0') + ':' +
      String(now.getSeconds()).padStart(2, '0');
      
      const newPost = {
        username: username,
        postTime: currentDate,
        title: titleValue.trim(),
        description: descriptionValue.trim(),
      };
   
      setList([...list, newPost]);
      setTitleValue('');
      setDescriptionValue('');

      Axios.post("http://localhost:3002/api/insert", newPost)
        .then((response) => {
          console.log("Successful insert! Server responded with:", response.data);
      })
        .catch((error) => {
        console.error("Error during post insertion:", error);
      });

    } else {  
      alert("Your post has to have a title and a description!")
    } 
  }

  return (
    <>
        <div id='EditPostContainer'> 
            <div id='elementsContainer'>
                <h2 id='EditorHeader'>Create Post</h2>    
                  <input id='Title' placeholder='Title' value={titleValue} onChange={handleTitleChange}/>           
                  <textarea id='Description' placeholder='Description..' value={descriptionValue} onChange={handleDescriptionChange}/>           
                <Button onClick={handleSubmit} width="97%" root="#" title="Post"  /> 
            </div> 
        </div>
    </>
  )
}