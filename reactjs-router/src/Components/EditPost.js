import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RxUpdate } from "react-icons/rx";
// import DataContext from '../context/DataContext';
import { format } from 'date-fns';
// import api from '../api/posts';

import { useStoreState, useStoreActions } from 'easy-peasy';

const EditPost = () => {
    // const { posts, setPosts, navigate } = useContext(DataContext);
    // const [editTitle, setEditTitle] = useState('');
    // const [editBody, setEditBody] = useState('');

    const navigate = useNavigate();
    const posts = useStoreState((state) => state.posts);
    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);
    const editPost = useStoreActions((actions) => actions.editPost); 
    const getPostById = useStoreState((state) => state.getPostById);

    const { id } = useParams('id');
   
    // get post by id 
    // const post = posts.find(x => (x.id).toString() === id);
    const post = getPostById(id);
    
    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        editPost(updatedPost);
        navigate(`/post/${id}`);
    }


    // load after state change
    useEffect(() => {
        if (post) {
            // set default for update values
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    return (
        <main className="NewPost">
            {post && (
                <>
                    <h1>Update Post</h1>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor='editTitle'>Title: </label>
                            <input
                                id="editTitle"
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            // required
                            />
                            {editTitle.trim() === "" && (
                                <p style={{ color: "red" }}>Post title can't be empty!!!</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor='editBody'>Body: </label>
                            <textarea
                                id="editBody"
                                value={editBody}
                                onChange={(e) => setEditBody(e.target.value)}
                            // required
                            />
                            {editBody.trim() === "" && (
                                <p style={{ color: "red" }}>Post body can't be empty!!!</p>
                            )}
                        </div>
                        <div>
                            <button
                                className="editButton"
                                type="button"
                                onClick={() => {
                                    if (!editTitle.trim() == ""
                                        && !editBody.trim() == "") {
                                        handleEdit(post.id)
                                    }
                                }}
                            >
                                <RxUpdate
                                    size={20}
                                /> Update Post
                            </button>
                        </div>
                    </form>
                </>
            )}
            {!post && (
                <>
                    <h2>Not found any post</h2>
                    <p>Well, that's dissapointing</p>
                    <Link to="/">Visit our homepage</Link>
                </>
            )}
        </main>
    )
}

export default EditPost