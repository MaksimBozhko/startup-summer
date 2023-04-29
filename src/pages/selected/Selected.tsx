import React from "react"
import { Flex } from "@mantine/core"

import { Item } from "../../features/vacancyList/vacancy"
import { useSelector } from "react-redux"
import { getSelectedVacancies } from "../../store/slices/selected"

export const Selected = () => {
  const vacancies = useSelector(getSelectedVacancies)
  return (
    <Flex
      align="center"
      direction="column">
      {
        vacancies.map((vacancy) => <Item
          key={vacancy.id}
          vacancy={vacancy}
          titleColor={"var(--secondaryColor)"} />)
      }
    </Flex>
  )
}