import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <header>
                <h2><a>Recipe  App</a></h2>
                <nav>
                {/* <ul> */}
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                {/* </ul> */}
                </nav>
            </header>

        )

    }
}

export default Nav;