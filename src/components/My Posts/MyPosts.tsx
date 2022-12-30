import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {AllPostsPropsType} from "../../App";

type myPostsPropsType = {
    allPosts: AllPostsPropsType[]
    addPost: (message: any) => void
}

const MyPosts = (props: myPostsPropsType) => {

    let postElement = props.allPosts.map((p, id) => {
        return (
            <div key={p.id}>
                <Post message={p.message} likesCount={p.likesCount}/>
            </div>
        )
    })
    let newPost = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        let text = newPost.current?.value
        props.addPost(text)
        if (newPost.current) newPost.current.value = ''
    }
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                New Posts
            </div>
            <div><textarea ref={newPost}></textarea></div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts;
