import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        <div>
            <div>My post</div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                <Post message={'Hi, how are you?'} likesCount={'0'}/>
                <Post message={'It`s my first post'} likesCount={'11'}/>
            </div>
        </div>
    </div>
}