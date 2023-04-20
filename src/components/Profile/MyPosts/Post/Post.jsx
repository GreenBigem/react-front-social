import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (<div className={s.item}>{props.message}, likes: {props.likesCount}</div>
    )
}

export default Post