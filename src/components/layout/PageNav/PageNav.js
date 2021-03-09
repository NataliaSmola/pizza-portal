import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';


class PageNav extends React.Component {
  render() {
    return (
      <nav className = {styles.row}>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter </NavLink>
      </nav>
    );
  }
}

export default PageNav;
