import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span className="name">{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments  }) {
  return (
    <>
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} >
          <div className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span className="name" >{comment.author.name}</span>
            <span>{comment.content}</span>
          </p>
          </div>
          <div className="btns" >
            <a className="curtir" href="#">Curtir · </a> 
            <a className="res" href="#">Responder ∙ </a> 
            <a className="time" href="#">{comment.time}</a>
          </div>
        </div>
      ))}        
    </div>
    </>
  )
}


function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}


export default PostItem;