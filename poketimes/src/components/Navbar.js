import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
// withRouter is Higher Order Component, that we need do use
// if we want to have access to props outside Route

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 3000);
    // I had to comment the above code to do another task
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar); // we are supercharging Navbar component with Higher Order Component