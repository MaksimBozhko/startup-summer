import React, { FC } from "react"
import { Box, Paper, Text, useMantineTheme } from "@mantine/core"
import { NavLink } from "react-router-dom"

import { useStyles } from "./styles"
import { useActions } from "../../../hooks"
import { ReactComponent as IconPlace } from "../../../common/assets/img/place.svg"
import { ReactComponent as IconStar } from "../../../common/assets/img/star.svg"
import { selectedVacancyActions } from "../../../store/slices/selected/slice"
import { ItemType } from "../../../store/slices/vacancy/types"
import { vacancyActions } from "../../../store/slices/vacancy/slice"
import { H2 } from "../../../components/headlines/h2"

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
      <Box>
        <NavLink to={`/vacancy/${id}`} className={classes.title} >
        <H2>{profession}</H2>
        </NavLink>
        <Box className={classes.content}>
          <Box className={classes.info}>
            <Text className={classes.salary}>{salaryBlock}</Text>
            <Text className={classes.schedule}>{type_of_work}</Text>
          </Box>
          <Box className={classes.placeBlock}>
            <IconPlace />
            <Text className={classes.place}>{town}</Text>
          </Box>
        </Box>
      </Box>
      <IconStar className={classes.star} onClick={clickStarHandler} />
    </Paper>
  )
}
