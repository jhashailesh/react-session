import React, { useState } from 'react'


// # add comment related to each post in comment box
// Api :: https://jsonplaceholder.typicode.com/posts/1/comments
// 1 -> is post id

// # Write test case to cover all scenario

function Post(props) {
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
  return (
    <div className="post-body" key={props.post.id}>
          <h2>{props.post.title}</h2>
          <p>{props.post.body}</p>
          <br/>
          <button
            onClick={
              () => setIsCommentBoxOpen(!isCommentBoxOpen)
            }
            type="button"
          >
            Show Comments
          </button>

          {isCommentBoxOpen && (
            <div className="comment-box">
            <ul>
              <li>
                <p><b>Name :: dadasdasdasdsad</b></p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr/>
                <p><i>Email :: Eliseo@gardner.biz</i></p>
              </li>
            </ul>
          </div>
          )}

        </div>
  )
}

export default Post
