import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to ='/book'>
            <h1>One React to Rule Them</h1>
            </Link>
            <Link to ='/'>
            <h1>Home</h1>
            </Link>
        </div>
    );
}

export default Header;