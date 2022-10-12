import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return <header className={classes.header}>
        <img src={'https://www.logomoose.com/wp-content/uploads/2015/07/Studio-St-Louis_monogram.png'} alt={"logo"}/>
    </header>
}