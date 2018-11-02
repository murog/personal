import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
    const headerStyle = {
        width: '100%',
        borderBottom: 'solid gray 2px',
        fontFamily: 'Helvetica'
    }
        return (
            <header style={headerStyle}>
                <h1>its an h1</h1>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>

            </header>
        );
    }
}


export default Header;
