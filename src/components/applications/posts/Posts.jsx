import React, { useEffect, useState } from 'react'
import Post from './Post';
import { getPosts } from './post.api';
import "./post.style.css";

// # Write test case to cover all scenario

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    updatePostFromApi()
  }, []);

  const updatePostFromApi = async () => {
    const postsData = await getPosts();
    setPosts(postsData);
  }
  return (
    <div className="post">
      {posts.map(post => (
        <Post post = {post} />
      ))}
    </div>
  )
}

export default Posts
