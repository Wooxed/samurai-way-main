import React from "react";
import classes from "./Navbar.module.css";


export const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={classes.item}>
            <a>Messages</a>
        </div>
        <div>
            <a className={classes.item}>News</a>
        </div>
        <div>
            <a className={classes.item}>Music</a>
        </div>
        <div>
            <a className={classes.item}>Settings</a>
        </div>
    </nav>
}

