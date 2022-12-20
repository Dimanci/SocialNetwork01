import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogs}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
const MessageItem = (props: MessagePropsType) => {
    return <div className={s.dialogs}>{props.message}</div>
}
const Dialogs = () => {
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs}>
                <DialogItem name={'Dima'} id={1}/>
                <DialogItem name={'Katya'} id={2}/>
                <DialogItem name={'Maksim'} id={3}/>
                <DialogItem name={'Olivia'} id={4}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={'Hello'}/>
                <MessageItem message={'What is going on!'}/>
                <MessageItem message={'What time is it now?'}/>
                <MessageItem message={'New movie was released.'}/>
            </div>
        </div>
    );
};

export default Dialogs;