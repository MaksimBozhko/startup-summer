import React from "react"

import s from "./styles.module.scss"
import { FilterBlock } from "../../components/filterBlock"
import { InputSearch } from "../../components/input"
import { VacancyList } from "../../components/vacancyList"

export const Search = () => {
  return (
    <div className={s.content}>
      <FilterBlock />
      <div className={s.search}>
        <InputSearch />
        <VacancyList />
      </div>
    </div>
  )
}