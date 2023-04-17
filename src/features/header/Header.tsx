import style from './Header.module.scss'
import { Nav } from './nav/Nav';
import React from "react";
import logo from '@/assets/logo.png'

export const Header: React.FC = () => {
 return (
  <header>
   <div className={style.companyLogo}>
       <img src={logo} alt="logo"/>
   </div>

      <div className={style.navigation}>
          <Nav/>
      </div>
  </header>
 );
};