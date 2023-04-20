import React from "react";
import s from './Message.module.css'

const Message = (props) => {
    const messages = ['Hi', 'Hello', 'You']
    return <div className={s.messages}>
        {
            messages.map((id, key) => {
                return (
                    <div key={key} className={s.message}>{id}</div>
                )
            })
        }
    </div>
}

export default Message