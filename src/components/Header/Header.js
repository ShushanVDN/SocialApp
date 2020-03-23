import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt="logo" src="https://pngimage.net/wp-content/uploads/2018/05/background-logo-png-5.png"/>
        <div className={classes.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'./login'}> Login</NavLink> }
        </div>
        </header>
    )
};

export default Header
