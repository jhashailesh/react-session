import React, { useEffect } from 'react'
import { getPosts } from './components/applications/posts/post.api'
import Posts from './components/applications/posts/Posts'
import Todo from './components/applications/todo/Todo'

function MainApp() {

  return (
    <div>
      <Todo />
      {/* <Posts /> */}
    </div>
  )
}

export default MainApp
