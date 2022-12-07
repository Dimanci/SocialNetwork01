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
            <Post message = 'Hello! Good day today!' likeCounts = '15'/>
            <Post message = 'What time is it now?' likeCounts = '25'/>
            <Post message = 'I bought a new car!!!' likeCounts = '55'/>
        </div>
    )
}

export default MyPosts;
