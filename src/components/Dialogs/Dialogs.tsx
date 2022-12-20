import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = () => {
    const Dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Maksim'},
        {id: 4, name: 'Olivia'},
    ]
    const Message = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What is going on!'},
        {id: 3, message: 'What time is it now?'},
        {id: 4, message: 'New movie was released.'},
    ]
    let dialogsElement = Dialogs.map((d, id: number) => {
        return (
            <div key={d.id} className={s.dialog}>
                <DialogItem name={d.name} id={d.id}/>
            </div>)
    })
    let messageElement = Message.map((m, id) => {
        return (
            <div key={m.id} className={s.message}>
                <MessageItem message={m.message}/>
            </div>)
    })

    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
};

export default Dialogs;