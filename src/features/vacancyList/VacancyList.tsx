import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Box, Flex } from "@mantine/core"

import { Item } from "./vacancy"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { MESSAGES } from "../../common/constant"
import { getVacancies } from "../../store/slices/vacancy"
import { getStatus } from "../../store/slices/app"
import { Preloader } from "../../components/preloader/Preloader"
import { appThunks } from "../../store/slices/app/slice"

export const VacancyList = () => {
  const vacancyList = useSelector(getVacancies)
  const status = useSelector(getStatus)
  const { vacancies } = useActions(vacancyThunks)
  const { refreshToken } = useActions(appThunks)

  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  useEffect(() => {
    vacancies({ keyword: search.keyword, page: search.page }).unwrap().catch((res) => {
      refreshToken({})
    })
  }, [vacancies, search.page])

  if (status === "loading") return <div style={{ minHeight: "650px" }}><Preloader /></div>
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