import React from "react";
import s from './DialogItem.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    return <div className={s.dialogs_items}>
        {props.state.map((id, key) => {
            return (
                <div key={key} className={s.dialog_item}>
                    <NavLink key={key} to={"" + id.id}>{id.name}</NavLink>
                </div>
            )
        }
        )
        }
    </div >
}

export default DialogItem