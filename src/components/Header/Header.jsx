import React from 'react';
import style from './Header.module.css';
import Logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container + " container"}>
        <a href="/">
          < img src={Logo} alt="Logo" className={style.logo}/>
        </a>
        <ul className={style.menu}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Why us</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
