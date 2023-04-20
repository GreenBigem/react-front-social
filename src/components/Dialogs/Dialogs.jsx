import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

const Dialogs = (props) => {

    return <div className={s.dialogs}>
        <DialogItem state={props.state.dialogs} />
        <Message />
    </div>
}

export default Dialogs