import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'

export class NavBar extends Component {
  render() {
    return <div id="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="customize-image">Customize Image</Link>
    </div>
  }
}

export default NavBar;
