import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

export type AppPropsType = {
    state: StatePropsType
    addPost: (message: any)=>void
}
export type StatePropsType = {
    dialogPage: DialogPagePropsType
    profilePage: ProfilePagePropsType
}
export type DialogPagePropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}
export type DialogsPropsType = {
    id:number
    name:string
}
export type MessagesPropsType = {
    id: number
    message: string
}
export type ProfilePagePropsType = {
    allPosts: AllPostsPropsType[]
}
export type AllPostsPropsType = {
    id: number
    message: string
    likesCount: number

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsState={props.state.dialogPage}/>}/>
                    <Route path='/profile' render={() => <Profile profileState={props.state.profilePage}
                    addPost={props.addPost}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
