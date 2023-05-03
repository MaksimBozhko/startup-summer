import React from "react"
import { NavLink } from "react-router-dom"

import s from "../menu.module.css"
import { MobileMenuType } from "./types"

export const MobileMenu = ({ toggleMobileMenu }: MobileMenuType) => {
  return (
    <ul className={s.mobileMenu}>
      <li onClick={toggleMobileMenu}>
        <NavLink to="/">
          Поиск Вакансий
        </NavLink>
      </li>
      <li onClick={toggleMobileMenu}>
        <NavLink to="/select">
          Избранное
        </NavLink>
      </li>
    </ul>
  )
}