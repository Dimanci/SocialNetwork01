import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogPagePropsType} from "../../App";

type AllDialogsPropsType = {
    dialogsState: DialogPagePropsType
}
const Dialogs = (props: AllDialogsPropsType) => {

    let dialogsElement = props.dialogsState.dialogs.map((d, id: number) => {
        return (
            <div key={d.id} className={s.dialog}>
                <DialogItem name={d.name} id={d.id}/>
            </div>)
    })
    let messageElement = props.dialogsState.messages.map((m, id) => {
        return (
            <div key={m.id} className={s.message}>
                <MessageItem message={m.message}/>
            </div>)
    })
    let newMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        let text = newMessage.current?.value
        alert(text)
    }
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div><textarea ref={newMessage}></textarea></div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;