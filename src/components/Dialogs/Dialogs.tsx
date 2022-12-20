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
    const DialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Maksim'},
        {id: 4, name: 'Olivia'},
    ]
    const MessageData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What is going on!'},
        {id: 3, message: 'What time is it now?'},
        {id: 4, message: 'New movie was released.'},
    ]
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs}>
                {DialogsData.map((d, id: number) => {
                    return (
                        <div key={d.id} className={s.dialog}>
                            <DialogItem name={d.name} id={d.id}/>
                        </div>)
                })}
            </div>
            <div className={s.messages}>
                {MessageData.map((m, id) => {
                    return (
                        <div key={m.id} className={s.message}>
                            <MessageItem message={m.message}/>
                        </div>)
                })}
            </div>
        </div>
    )
};

export default Dialogs;