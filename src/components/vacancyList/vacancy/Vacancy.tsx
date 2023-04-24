import React from "react"
import { Paper } from "@mantine/core"

import { useStyles } from "./styles"
import { ReactComponent as IconPlace } from "../../../common/assets/img/place.svg"
import { ReactComponent as IconStar } from "../../../common/assets/img/star.svg"

export const Vacancy = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.paper}>
      <div>
        <h2 className={classes.title}>Менеджер-дизайнер</h2>
        <div className={classes.content}>
          <div className={classes.info}>
            <span className={classes.salary}>з/п от 70000 rub</span>
            <span className={classes.schedule}>Полный рабочий день</span>
          </div>
          <div className={classes.placeBlock}>
            <IconPlace />
            <p className={classes.place}>Новый Уренгой</p>
          </div>
        </div>
      </div>
      <IconStar />
    </Paper>
  )
}