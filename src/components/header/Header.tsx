import React from "react"

import s from "./styles.module.scss"
import { ReactComponent as Logo } from "../../common/assets/img/logo.svg"
import { Navigation } from "../navigation"
import { Menu } from "../menu/Menu"

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        {/*<Navigation />*/}
        <Menu/>
      </div>
    </div>
  )
}