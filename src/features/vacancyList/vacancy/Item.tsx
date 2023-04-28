import React, { FC } from "react"
import { Paper } from "@mantine/core"
import { NavLink } from "react-router-dom"

import { useStyles } from "./styles"
import { ReactComponent as IconPlace } from "../../../common/assets/img/place.svg"
import { ReactComponent as IconStar } from "../../../common/assets/img/star.svg"

type ItemPropsType = {
  id?: number
  profession?: string
  firm_name?: string
  type_of_work?: string
  payment_to?: number
  payment_from?: number
  currency?: string
  town?: string
  titleColor: any
}

export const Item: FC<ItemPropsType> = (
  {
    id,
    profession,
    type_of_work,
    payment_to,
    payment_from,
    currency,
    town,
    titleColor
  }) => {
  const { classes } = useStyles({titleColor})
  let salaryBlock
  if (payment_from === 0 && payment_to !== 0) {
    salaryBlock = <>з/п {payment_to} {currency}</>
  } else if (payment_from !== 0 && payment_to === 0) {
    salaryBlock = <>з/п {payment_from} {currency}</>
  } else if (payment_from !== 0 && payment_to !== 0) {
    salaryBlock = <>з/п {payment_from} - {payment_to} {currency}</>
  } else {
    salaryBlock = <></>
  }

  return (
    <Paper className={classes.paper}>
      <div>
        <h2>
          <NavLink to={`/vacancy/${id}`} className={classes.title}>{profession}</NavLink>
        </h2>
        <div className={classes.content}>
          <div className={classes.info}>
            <span className={classes.salary}>{salaryBlock}</span>
            <span className={classes.schedule}>{type_of_work}</span>
          </div>
          <div className={classes.placeBlock}>
            <IconPlace />
            <p className={classes.place}>{town}</p>
          </div>
        </div>
      </div>
      <IconStar className={classes.star} />
    </Paper>
  )
}