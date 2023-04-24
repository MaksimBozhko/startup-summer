import React from "react"

import s from "./styles.module.scss"
import { ReactComponent as Logo } from "../../common/assets/img/logo.svg"
import { Navigation } from "../navigation"

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <Navigation />
      </div>
    </div>
  )
}