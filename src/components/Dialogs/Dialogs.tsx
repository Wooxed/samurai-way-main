import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={'Andrey'} id={1}></DialogItem>
                <DialogItem name={'Serega'} id={2}></DialogItem>
                <DialogItem name={'Viktor'} id={3}></DialogItem>
                <DialogItem name={'Misha'} id={4}></DialogItem>
                <DialogItem name={'Anton'} id={5}></DialogItem>
                <DialogItem name={'Grisha'} id={6}></DialogItem>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'It`s great!'}/>
                <Message message={'It`s great!'}/>
                <Message message={'It`s great!'}/>
                <Message message={'It`s great!'}/>

        </div>
</div>
)
    ;
};

