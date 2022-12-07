import React from 'react'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New Posts
            </div>
            <textarea></textarea>
            <button>Add Post</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;
