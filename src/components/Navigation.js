import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/joke" className="nav-item" activeClassName="activeLink">
          Joke
        </NavLink>
        <NavLink
          to="/counter"
          className="nav-item"
          activeClassName="activeLink"
        >
          Counter
        </NavLink>

        <NavLink
          to="/countervalue"
          className="nav-item"
          activeClassName="activeLink"
        >
          Counter Rezult
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
