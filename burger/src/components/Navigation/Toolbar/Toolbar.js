import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigatoinItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={ classes.Toolbar }>
        <DrawerToggle clicked={ props.drawerToggle } />
        <div className={ classes.Logo }>
            <Logo />
        </div>
        <div className={ classes.DesktopOnly }>
            <NavigatoinItems />
        </div>
    </header>
);

export default toolbar;
