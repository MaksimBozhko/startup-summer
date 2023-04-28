import React, { ChangeEvent, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { IconSearch } from "@tabler/icons-react"
import { Input } from "@mantine/core"
import { Button } from '@mantine/core';

import { useStyles } from "./styles"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"

export const InputSearch = () => {
  const { classes } = useStyles()

  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)
  const { vacancies } = useActions(vacancyThunks)

  const [value, setValue] = useState(search.keyword)
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    if (e.currentTarget.value) {
      setSearchParams({ ...search, keyword: e.currentTarget.value })
    } else {
      setSearchParams({})
    }
  }
  const onClickHandler = () => {
    vacancies({keyword: search.keyword})
  }

  return <>
    <form className={classes.form}>
      <Input
        className={classes.input}
        size="lg"
        icon={<IconSearch />}
        placeholder="Введите название вакансии"
        onChange={onChangeInputHandler}
        value={value}
      />
      <Button
        className={classes.button}
        onClick={onClickHandler}>Поиск</Button>
    </form>
  </>
}