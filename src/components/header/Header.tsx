import React from "react"
import { Box } from "@mantine/core"

import s from "./styles.module.css"
import { ReactComponent as Logo } from "../../common/assets/img/logo.svg"
import { Menu } from "../menu"

export const Header = () => {
  return (
    <Box className={s.header}>
      <Box className={s.container}>
        <Logo />
        <Menu />
      </Box>
    </Box>
  )
}