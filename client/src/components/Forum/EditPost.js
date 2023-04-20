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


  let userId;

  useEffect(()=> {
    Axios.get("http://localhost:3001/login", { withCredentials: true }).then((response) => {
      console.log(response);
      userId = response.data.id;
      setUsername(response.data.username);
      console.log(username);
      console.log(userId);
    })
  }, [])


  function handleSubmit(event) {
    event.preventDefault();
    
    if (titleValue.trim() && descriptionValue.trim()) {
      console.log(username);
      const newPost = {
        username: username,
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
        console.log("successfull insert!")
      }) 

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