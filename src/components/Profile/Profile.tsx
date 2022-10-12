import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={"https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg"} alt={'image'}/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>

    )
}