import React from "react"

import { Item } from "./vacancy"
import { useGetVacanciesQuery } from "./createAPI"

export const VacancyList = () => {
  const { data } = useGetVacanciesQuery({})
  return (
    <>
      <Item />
    </>
  )
}