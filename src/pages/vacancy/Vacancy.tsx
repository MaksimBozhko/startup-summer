import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Box, Paper } from "@mantine/core"

import { Item } from "../../features/vacancyList/vacancy"
import { getVacancy } from "../../store/slices/vacancy/selectors"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { getStatus } from "../../store/slices/app"
import { useStyles } from "./styles"
import { getContentText } from "../../common/utils/getContentText"
import { Preloader } from "../../components/preloader/Preloader"

export const Vacancy = () => {
  const { classes } = useStyles({})

  const { vacancy } = useActions(vacancyThunks)
  const vacancyItem = useSelector(getVacancy)
  const status = useSelector(getStatus)

  const params = useParams()
  const id = params.id || ""

  const text = getContentText(vacancyItem.firm_activity, vacancyItem.vacancyRichText)

  useEffect(() => {
    vacancy(id)
  }, [vacancy, id])

  if (status === "loading") return <Preloader />
  return (
    <Box className={classes.page}>
      <Item vacancy={vacancyItem}
            titleColor={"var(--primaryColor)"} />
      <Paper className={classes.content}>
        <Box dangerouslySetInnerHTML={{ __html: text }} />
      </Paper>
    </Box>
  )
}