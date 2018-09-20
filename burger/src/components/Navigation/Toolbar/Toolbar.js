import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigatoinItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={ classes.Toolbar }>
        <div>MENU</div>
        <div className={ classes.Logo }>
            <Logo />
        </div>
        <div className={ classes.DesktopOnly }>
            <NavigatoinItems />
        </div>
    </header>
);

export default toolbar;
