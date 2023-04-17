import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Nav.module.scss'


export const Nav: React.FC = () => {
 return (
  <nav className={style.navigation}>
   <NavLink to={'/about'}>ABOUT PROGRAM</NavLink>
   <NavLink to={'/version'}>VERSION</NavLink>
   <NavLink to={'/guide'}>GUIDE</NavLink>
  </nav>
 );
};