import React from "react"
import { Box, Flex } from "@mantine/core"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useStyles } from "./styles"
import { FilterBlock } from "../../features/filterBlock"
import { InputSearch } from "../../components/input"
import { Pagination } from "../../components/pagination"
import { getTotalCount, getVacancies } from "../../store/slices/vacancy"
import { VacancyList } from "../../features/vacancyList"
import { getSearchParams } from "../../common/utils/getSearchParams"


export const Search = () => {
  const { classes } = useStyles()

  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

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
            <Pagination totalUserCount={totalCount} currentPage={search.page} />
          )
        }
      </Box>
    </Flex>
  )
}