import React from "react";
import classes from './Post.module.css'

type MessageType = {
    likesCount: string;
    message: string
}


export const Post = (props: MessageType) => {
    return (
        <div className={classes.item}><img
            src={'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213245707/original/66a67e36fe8227d15c8c310cc112b60e74af5d6f/design-avatar-cartoon-for-business-gaming-social-media.jpg'}/>
            {props.message}
            <div><span>like</span>{props.likesCount}</div>
        </div>

    )
}