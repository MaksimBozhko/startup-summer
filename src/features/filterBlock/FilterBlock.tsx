import React, { useEffect, useState } from "react"
import { Button, Flex, MultiSelect, Paper, Select } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"
import { useSearchParams } from "react-router-dom"

import { useStyles } from "./styles"
import { ReactComponent as Close } from "../../common/assets/img/close.svg"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { OptionsType } from "../../store/slices/filter/types"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { cataloguesThunks } from "../../store/slices/filter/slice"
import { useSelector } from "react-redux"
import { getCatalogues } from "../../store/slices/filter"

export const FilterBlock = () => {
  const { classes } = useStyles()

  const { vacancies } = useActions(vacancyThunks)
  const { catalogues } = useActions(cataloguesThunks)
  const cataloguesList = useSelector(getCatalogues)

  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)
  const [value, setValue] = useState([] as string[])

  useEffect(() => {
    setValue(search.industry ? search.industry.split("-") : [])
    catalogues({})
  }, [])

  const multiSelectOptions = cataloguesList.map((el: OptionsType) => el.title_rus)

  const handleChange = (selected: string[]) => {
    setValue(selected)
    if (selected.length) {
      setSearchParams({ ...search, industry: selected.join("-") })
    } else {
      setSearchParams({})
    }
  }
  const paymentFromChange = (value: string) => {
    if (value !== "0") {
      setSearchParams({ ...search, payment_from: value })
    } else {
      setSearchParams({})
    }
  }
  const paymentToChange = (value: string) => {
    if (value !== "0") {
      setSearchParams({ ...search, payment_to: value })
    } else {
      setSearchParams({})
    }
  }
  const resetFilterHandler = () => {
    setValue([""])
    setSearchParams({})
  }
  const clickHandler = () => {
    const catalogues = search.industry.split("-").map((optionTitle: string) => {
      const selectedOption: any = multiSelectOptions.find((option: any) => option.title_rus === optionTitle)
      return selectedOption?.key
    })
    vacancies({ catalogues, payment_from: search.payment_from, payment_to: search.payment_to })
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <p className={classes.title}>Фильтры</p>
        <Flex align="center"
              direction="row"
              justify="flex-end"
              onClick={resetFilterHandler}
              className={classes.reset}
        >
          <p className={classes.close}>Сбросить все</p>
          <Close />
        </Flex>
      </div>
      <div>
        <p className={classes.text}>Отрасль</p>
        <MultiSelect
          data={multiSelectOptions || ["123"]}
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
          data={["0", "10000", "20000", "30000", "40000", "50000", "60000", "7000", "8000", "9000"]}
          value={search.payment_from ? search.payment_from : ""}
          onChange={paymentFromChange}
        />
        <Select
          placeholder="До"
          searchable
          nothingFound="No options"
          data={["0", "10000", "20000", "30000", "40000", "50000", "60000", "7000", "8000", "9000"]}
          value={search.payment_to ? search.payment_to : ""}
          onChange={paymentToChange}
        />
      </div>
      <Button className={classes.btn} onClick={clickHandler}>Применить</Button>
    </Paper>
  )
}