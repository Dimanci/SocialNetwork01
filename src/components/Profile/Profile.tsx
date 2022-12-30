import React from "react";
import MyPosts from "../My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";
import {message} from "antd";

export type AllProfilePagePropsType = {
    profileState: ProfilePagePropsType
    addPost: (message: any)=>void
}
const Profile = (props: AllProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts allPosts={props.profileState.allPosts}
            addPost={props.addPost}/>
        </div>
    )
}

export default Profile;