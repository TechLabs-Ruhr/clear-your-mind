import React from 'react'
import '../Forum/Forum.css';
import Button from '../smallComponents/Button';
import { useState } from 'react';
import Axios from 'axios'

export default function EditPost({ setList, list }) {
  
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

 
  const handleTitleChange = event => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescriptionValue(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    if (titleValue.trim() && descriptionValue.trim()) {
      const newPost = {
        username: 'John Doe',
        postTime: '2023-04-06',
        title: titleValue.trim(),
        description: descriptionValue.trim(),
      };
      console.log(newPost.id);
      //console.log(newPost.userid);
      setList([...list, newPost]);
      setTitleValue('');
      setDescriptionValue('');

      Axios.post("http://localhost:3001/api/insert", newPost).then(() => {
        alert("successfull insert!")
      }) 

    } else {  
      alert("Your post has to have a title and a description!")
    } 
    console.log("handle Submit was called")
  }





  return (
    <>
        <div id='EditPostContainer'> 
            <div id='elementsContainer'>
                <h2 id='EditorHeader'>Create Post</h2>    
                  <input id='Title' placeholder='Title' value={titleValue} onChange={handleTitleChange}/>           
                  <textarea id='Description' placeholder='Description..' value={descriptionValue} onChange={handleDescriptionChange}/>           
                <Button onClick={handleSubmit} width="97%" root="#" title="Post"  /> 
            </div> {/*
            <button onClick={handleSubmit}>
      Click me!
  </button> */}
        </div>
    </>
  )
}


 /*
  const addPost = (e) => {
    e.preventDefault();
    setList((list) => [...list, {title:  titleValue, description: descriptionValue, id: Math.random() * 100 }]);
  };
*/