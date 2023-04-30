import React from "react"
import { Flex } from "@mantine/core"

import { Item } from "../../features/vacancyList/vacancy"
import { useSelector } from "react-redux"
import { getSelectedVacancies } from "../../store/slices/selected"
import { EmptySelectedPage } from "../../components/emptySelectedPage"

export const Selected = () => {
  const vacancies = useSelector(getSelectedVacancies)
  return (
    <>
      {
        vacancies.length
          ? <Flex
            align="center"
            direction="column">
            {
              vacancies.map((vacancy) => <Item
                key={vacancy.id}
                vacancy={vacancy}
                titleColor={"var(--secondaryColor)"} />)
            }
          </Flex>
          : <EmptySelectedPage />
      }
    </>
  )
}