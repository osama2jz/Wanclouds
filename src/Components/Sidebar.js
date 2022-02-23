import React from 'react';
import { Menu } from 'antd';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Sidebar(props) {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="table">Table</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="cards">Cards</Link>
            </Menu.Item>
        </Menu>
    );
}

export default Sidebar;