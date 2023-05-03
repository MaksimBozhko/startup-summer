import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { Item } from "./vacancy"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { MESSAGES } from "../../common/constant"
import { getSelectPage, getVacancies } from "../../store/slices/vacancy"
import { Box, Flex } from "@mantine/core"
import { getStatus } from "../../store/slices/app"
import { Preloader } from "../../components/preloader/Preloader"

export const VacancyList = () => {
  const selectPage = useSelector(getSelectPage)
  const vacancyList = useSelector(getVacancies)
  const status = useSelector(getStatus)
  const { vacancies } = useActions(vacancyThunks)

  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  useEffect(() => {
    vacancies({ keyword: search.keyword, page: selectPage })
  }, [vacancies, selectPage])

  if (status === "loading") return <div style={{minHeight: "650px"}}><Preloader /> </div>
  return (
    <Box>
      {
        vacancyList.length
          ? <Box>
            {
              vacancyList.map((el) => <Item key={el.id}
                                            vacancy={el}
                                            titleColor={"var(--secondaryColor)"} />)
            }
          </Box>
          : <Flex
            style={{ marginTop: "30px" }}
            justify="center">{MESSAGES.NO_VACANCIES}</Flex>
      }
    </Box>
  )
}