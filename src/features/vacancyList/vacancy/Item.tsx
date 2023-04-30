import React, { FC } from "react"
import { Paper } from "@mantine/core"
import { NavLink } from "react-router-dom"

import { useStyles } from "./styles"
import { useActions } from "../../../hooks"
import { ReactComponent as IconPlace } from "../../../common/assets/img/place.svg"
import { ReactComponent as IconStar } from "../../../common/assets/img/star.svg"
import { selectedVacancyActions } from "../../../store/slices/selected/slice"
import { ItemType } from "../../../store/slices/vacancy/types"
import { vacancyActions } from "../../../store/slices/vacancy/slice"

type ItemPropsType = {
  vacancy: ItemType,
  titleColor: string
}

export const Item: FC<ItemPropsType> = ({ vacancy, titleColor }) => {

  const {
    id,
    profession,
    payment_from,
    payment_to,
    currency,
    town,
    type_of_work,
    isSelected
  } = vacancy

  const { classes } = useStyles({ titleColor, colorIcon: isSelected })
  const { setVacancy } = useActions(selectedVacancyActions)
  const { updateVacancy } = useActions(vacancyActions)

  const getSalary = () => {
    if (payment_from === 0 && payment_to !== 0) {
      return <>з/п {payment_to} {currency}</>
    } else if (payment_from !== 0 && payment_to === 0) {
      return <>з/п {payment_from} {currency}</>
    } else if (payment_from !== 0 && payment_to !== 0) {
      return <>з/п {payment_from} - {payment_to} {currency}</>
    } else {
      return <></>
    }
  }
  const salaryBlock = getSalary()

  const clickStarHandler = () => {
    setVacancy({ vacancy, isSelected })
    updateVacancy(vacancy.id)
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
      <IconStar className={classes.star} onClick={clickStarHandler} />
    </Paper>
  )
}