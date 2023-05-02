import React from "react"
import s from "./menu.module.css"
import { NavLink } from "react-router-dom"

export const MobileMenu = () => {
  return (
    // <div className={s.mobileMenu}>
    //   <a href='#home'>Home</a>
    //   <a href='#news'>News</a>
    //   <a href='#shop'>Shop</a>
    //   <a href='#contact'>Contact</a>
    //   <a href='#about'>About</a>
    //   <a href='#privacy'>Privacy Policy</a>
    // </div>
  <ul className={s.mobileMenu}>
    <li>
      <NavLink to="/">
        Поиск Вакансий
      </NavLink>
    </li>
    <li>
      <NavLink to="/select">
        Избранное
      </NavLink>
    </li>
  </ul>
  )
}