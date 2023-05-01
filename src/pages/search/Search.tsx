import React from "react"
import { Box, Flex } from "@mantine/core"

import { FilterBlock } from "../../features/filterBlock"
import { InputSearch } from "../../components/input"
import { VacancyList } from "../../features/vacancyList"
import { useStyles } from "./styles"


export const Search = () => {
  const { classes } = useStyles()
  return (
    <Flex className={classes.page}>
      <FilterBlock />
      <Box className={classes.content}>
        <InputSearch />
        <VacancyList />
      </Box>
    </Flex>
  )
}