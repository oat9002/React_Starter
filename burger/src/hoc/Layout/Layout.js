import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    drawerToggle = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggle={ this.drawerToggle }/>
                <SideDrawer 
                    closed={ this.sideDrawerCloseHandler }
                    open={ this.state.showSideDrawer }/>
                <main className={ classes.Content } style={{ height: this.props.height }}>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default Layout;