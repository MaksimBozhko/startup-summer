import React, { ChangeEvent, useState } from "react"
import { IconSearch } from "@tabler/icons-react"
import { Input } from "@mantine/core"
import { useStyles } from "./styles"
import { useSearchParams } from "react-router-dom"
import { getSearchParams } from "../../common/utils/getSearchParams"

export const InputSearch = () => {
  const { classes } = useStyles()
  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  const [value, setValue] = useState(search.packName)
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    if (e.currentTarget.value) {
      setSearchParams({ ...search, packName: e.currentTarget.value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <Input
      className={classes.input}
      icon={<IconSearch />}
      placeholder="Введите название вакансии"
      onChange={onChangeInputHandler}
      value={value}
    />
  )
}