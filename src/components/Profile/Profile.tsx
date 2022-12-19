import React from "react";
import s from './Profile.module.css'
import MyPosts from "../My Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img id={s.hogwarts} src='http://i.imgur.com/CMWTqJx.jpg?1'/></div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;