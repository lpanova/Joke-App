import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/joke" className="nav-item">
          Welcome
        </NavLink>
        <NavLink to="/counter" className="nav-item">
          Counter
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
