import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Paper } from "@mantine/core"

import { Item } from "../../features/vacancyList/vacancy"
import { getVacancy } from "../../store/slices/vacancy/selectors"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { getStatus } from "../../store/slices/app"
import { useStyles } from "./styles"
import { getContentText } from "../../common/utils/getContentText"

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
  }, [vacancy])

  if (status !== "succeeded") return <>Loading...</>
  return (
    <div className={classes.page}>
      <Item id={vacancyItem.id}
            profession={vacancyItem.profession}
            type_of_work={vacancyItem.type_of_work.title}
            payment_to={vacancyItem.payment_to}
            payment_from={vacancyItem.payment_from}
            currency={vacancyItem.currency}
            town={vacancyItem.town.title}
            titleColor={"var(--primaryColor)"}/>
      <Paper className={classes.content}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Paper>
    </div>
  )
}