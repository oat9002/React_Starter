import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigatoinItems from '../NamigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={ classes.Toolbar }>
        <div>MENU</div>
        <div className={ classes.Logo }>
            <Logo />
        </div>
        <NavigatoinItems />
    </header>
);

export default toolbar;
