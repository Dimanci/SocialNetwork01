import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img id='hogwarts' src='http://i.imgur.com/CMWTqJx.jpg?1'/></div>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                <div>
                    New Posts
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;