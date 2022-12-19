import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.alldialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogs}>Dima</div>
                <div className={s.dialogs}>Katya</div>
                <div className={s.dialogs}>Maksim</div>
                <div className={s.dialogs}>Olivia</div>
            </div>
            <div className={s.messages}>
                <div className={s.dialogs}>Hello</div>
                <div className={s.dialogs}>What is going on!</div>
                <div className={s.dialogs}>What time is it now?</div>
                <div className={s.dialogs}>New movie was released.</div>
            </div>
        </div>
    );
};

export default Dialogs;