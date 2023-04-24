import React from "react"
import { NavLink } from "react-router-dom"

import s from "./styles.module.scss"
import { activeType } from "./types"
import { cn } from "../../common/lib/cn"

export const Navigation = () => {
  const linkClass = ({ isActive }: activeType) => cn(s.item, { [s.active]: isActive })
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className={linkClass}>
            Поиск Вакансий
          </NavLink>
        </li>
        <li>
          <NavLink to="/select" className={linkClass}>
            Избранное
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}