import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    const AllPosts = [
        {id: 1, message: 'Hello! Good day today!', likesCount: 15},
        {id: 2, message: 'What time is it now?', likesCount: 25},
        {id: 3, message: 'I bought a new car!!!', likesCount: 55},
    ]
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                New Posts
            </div>
            <div><textarea></textarea></div>
            <div>
                <button>Add Post</button>
            </div>
            {AllPosts.map((p, id) => {
                return (
                    <div key={p.id}>
                        <Post message={p.message} likesCount={p.likesCount}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MyPosts;
