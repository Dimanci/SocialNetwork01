import React from 'react';
import s from "./Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div><img id={s.hogwarts} src='http://i.imgur.com/CMWTqJx.jpg?1'/></div>
            <div className={s.description}>
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;