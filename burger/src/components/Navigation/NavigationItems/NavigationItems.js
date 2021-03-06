import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css'

const navigationItems = () => (
    <ul className={ classes.NavigationItems }>
        <NavigationItem link='/' active>Burgur builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;