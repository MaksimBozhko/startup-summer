import React from "react"
import { Box, Flex } from "@mantine/core"

import { useStyles } from "./styles"
import { FilterBlock } from "../../features/filterBlock"
import { InputSearch } from "../../components/input"
import { Pagination } from "../../components/pagination"
import { useSelector } from "react-redux"
import { getSelectPage, getTotalCount, getVacancies } from "../../store/slices/vacancy"
import { VacancyList } from "../../features/vacancyList"


export const Search = () => {
  const { classes } = useStyles()
  const selectPage = useSelector(getSelectPage)
  const vacancyList = useSelector(getVacancies)
  const totalCount = useSelector(getTotalCount)
  return (
    <Flex className={classes.page}>
      <FilterBlock />
      <Box className={classes.content}>
        <InputSearch />
        <VacancyList />
        {
          vacancyList.length !== 0 && (
            <Pagination totalUserCount={totalCount} currentPage={selectPage} />
          )
        }
      </Box>
    </Flex>
  )
}