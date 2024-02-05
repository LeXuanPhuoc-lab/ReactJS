import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { format } from 'date-fns';

const NewPost = () => {
  const navigate = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);
  
  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);


  const handleSubmit = async (e) => {
    e.preventDefault();
    //if(postTitle || postBody) return;

    // Add new post
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    var datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    // Save 
    savePost(newPost);
    // navigate to home page
    navigate("/");
  }


  return (
    <main className="NewPost">
      <h1>New Post</h1>
      <form
        className="newPostForm"
        onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="postTitle">Post Title: </label>
          <input
            id="postTitle"
            type="text"
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='postBody'>Post Body: </label>
          <textarea
            id="postBody"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
          >
            <IoIosAddCircle
              size={20}
            /> Add New
          </button>
        </div>
      </form>
    </main>
  )
}

export default NewPost