import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Burger } from "@mantine/core"

import { MobileMenu } from "./mobileMenu"
import s from "./menu.module.css"
import { activeType } from "../navigation/types"
import { cn } from "../../common/lib/cn"


export const Menu = () => {
  const [isShown, setIsShown] = useState(false)
  const toggleMobileMenu = () => {
    setIsShown(!isShown)
  }

  const linkClass = ({ isActive }: activeType) => cn(s.item, { [s.active]: isActive })

  return (
    <>
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
      <Burger opened={isShown} color="#5E96FC" className={s.showMobileMenuButton} onClick={toggleMobileMenu} />
      {isShown && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
    </>
  )
}