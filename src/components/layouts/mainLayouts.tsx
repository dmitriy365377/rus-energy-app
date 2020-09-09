import React from 'react';
import classes from './mainLayouts.module.scss';


interface PropsType {
    children: JSX.Element
}

export const MainLayouts = (props: PropsType) => {
    return (
        <>
            <header className={classes.topbar}></header>
            <div>
                {props.children}
            </div>
        </>
    )
}