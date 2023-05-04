import React, { ChangeEvent, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { IconSearch } from "@tabler/icons-react"
import { Box, Input } from "@mantine/core"
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
      searchParams.delete('keyword')
      setSearchParams(searchParams);
    }
  }
  const onClickHandler = () => {
    vacancies({keyword: search.keyword})
  }

  return <>
    <Box className={classes.form}>
      <Input
        data-elem="search-input"
        size="lg"
        icon={<IconSearch />}
        placeholder="Введите название вакансии"
        onChange={onChangeInputHandler}
        value={value}
      />
      <Button
        data-elem="search-button"
        className={classes.button}
        onClick={onClickHandler}>Поиск</Button>
    </Box>
  </>
}