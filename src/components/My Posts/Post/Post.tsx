import React from "react";
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjp8OAP-2JGqLZyhu0bmV6W7yMzTgRViJvQ&usqp=CAU' alt={''}/>
            {props.message}
            <div><span>like</span>{props.likeCounts}</div>
        </div>
    )
}

export default Post;
