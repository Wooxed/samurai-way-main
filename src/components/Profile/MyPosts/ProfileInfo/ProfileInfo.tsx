import React from 'react';
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={"https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg"} alt={'image'}/>
            </div>
            <div className={classes.descriptionBlock}>ava + description</div>
        </div>
    );
};

