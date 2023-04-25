import React, { useState } from "react"
import { Button, Flex, MultiSelect, Paper, Select } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"
import { useSearchParams } from "react-router-dom"

import { useStyles } from "./styles"
import { ReactComponent as Close } from "../../common/assets/img/close.svg"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useGetCataloguesQuery } from "./createAPI"
import { OptionsType } from "./types"

export const FilterBlock = () => {
  const { classes } = useStyles()

  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  const [value, setValue] = useState(search.industry ? search.industry.split(",") : [])

  const { data, isSuccess } = useGetCataloguesQuery()
  const multiSelectOptions = isSuccess && data.map((el: OptionsType) => el.title_rus)

  const handleChange = (selected: string[]) => {
    setValue(selected)
    if (selected.length) {
      setSearchParams({ ...search, industry: selected.join(",") })
    } else {
      setSearchParams({})
    }
  }
  const paymentFromChange = (value: string) => {
    if (value !== "0") {
      setSearchParams({ ...search, paymentFrom: value })
    } else {
      setSearchParams({})
    }
  }
  const paymentToChange = (value: string) => {
    if (value !== "0") {
      setSearchParams({ ...search, paymentTo: value })
    } else {
      setSearchParams({})
    }
  }
  const clickHandler = () => {

  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <p className={classes.title}>Фильтры</p>
        <Flex align="center" direction="row" justify="flex-end">
          <p className={classes.close}>Сбросить все</p>
          <Close />
        </Flex>
      </div>
      <div>
        <p className={classes.text}>Отрасль</p>
        <MultiSelect
          data={multiSelectOptions || []}
          placeholder="Выберете отрасль"
          rightSection={<IconChevronDown size="1rem" />}
          styles={{ rightSection: { pointerEvents: "none" } }}
          rightSectionWidth={40}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <p className={classes.text}>Оклад</p>
        <Select
          placeholder="От"
          searchable
          nothingFound="No options"
          className={classes.select}
          data={["0", "1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000"]}
          value={search.paymentFrom ? search.paymentFrom : ""}
          onChange={paymentFromChange}
        />
        <Select
          placeholder="До"
          searchable
          nothingFound="No options"
          data={["0", "1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000"]}
          value={search.paymentTo ? search.paymentTo : ""}
          onChange={paymentToChange}
        />
      </div>
      <Button className={classes.btn} onClick={clickHandler}>Применить</Button>
    </Paper>
  )
}