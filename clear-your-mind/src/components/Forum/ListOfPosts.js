import React from 'react'
import '../Forum/Forum.css';
import ForumPost from './ForumPost';

export default function ListOfPosts({posts, setList}) {
  return (
    <>
    <div id='PostsContainer'> 
        <ul>
            {posts.map((post) =>
                <ForumPost title={post.title} description={post.description}/>  
            )}
        </ul>
    </div>
    </>
  )
}
