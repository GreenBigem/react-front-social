import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>

                {
                    props.posts.map((id, key) => {
                        return <Post key={key} message={id.message} likesCount={id.likesCount} />
                    })
                }
            </div>
        </div>
    )
}

export default MyPosts