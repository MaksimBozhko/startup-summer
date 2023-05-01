import React from "react"
import { Button, Flex } from "@mantine/core"
import { NavLink } from "react-router-dom"

import { ReactComponent as EmptySelectedIcon} from "../../common/assets/img/emptySelected.svg"
import { MESSAGES } from "../../common/constant"
import { useStyles } from "./styles"

export const EmptySelectedPage = () => {
  const { classes } = useStyles()
  return (
    <Flex align="center"
          direction="column"
          gap={"32px"}
          className={classes.page}>
      <EmptySelectedIcon/>
      <p>{MESSAGES.NO_SELECTED_VACANCIES}</p>
      <NavLink to={"/"}>
        <Button>{MESSAGES.BACK_TO_SEARCH}</Button>
      </NavLink>
    </Flex>
  )
}