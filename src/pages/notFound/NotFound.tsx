import React from "react"
import { Button, Flex } from "@mantine/core"
import { NavLink } from "react-router-dom"

import { MESSAGES } from "../../common/constant"
import {ReactComponent as NotFoundIcon} from "../../common/assets/img/error-404.svg"

export const NotFound = () => {
  return (
    <Flex align="center"
          direction="column"
          gap={"32px"}>
      <NotFoundIcon/>
      <p>{MESSAGES.NOT_FOUND}</p>
      <NavLink to={"/"}>
        <Button variant={"light"}>{MESSAGES.BACK_TO_SEARCH}</Button>
      </NavLink>
    </Flex>
  )
}