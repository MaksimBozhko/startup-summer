import React, { useEffect, useState } from "react"
import { Box, Button, Flex, MultiSelect, NumberInput, Paper, Text } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useStyles } from "./styles"
import { ReactComponent as Close } from "../../common/assets/img/close.svg"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { OptionsType } from "../../store/slices/filter/types"
import { useActions } from "../../hooks"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { cataloguesThunks } from "../../store/slices/filter/slice"
import { getCatalogues } from "../../store/slices/filter"
import { H3 } from "../../components/headlines/h3"
import { H4 } from "../../components/headlines/h4"

export const FilterBlock = () => {
  const { classes } = useStyles()

  const { vacancies } = useActions(vacancyThunks)
  const { catalogues } = useActions(cataloguesThunks)
  const cataloguesList = useSelector(getCatalogues)

  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)
  const [value, setValue] = useState([] as string[])

  const [visible, setVisible] = useState(true)

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
  const paymentFromChange = (value: number | "") => {
    if (value !== "") {
      setSearchParams({ ...search, payment_from: value })
    } else {
      setSearchParams({})
    }
  }
  const paymentToChange = (value: number | "") => {
    if (value !== "") {
      setSearchParams({ ...search, payment_to: value })
    } else {
      setSearchParams({})
    }
  }
  const resetFilterHandler = () => {
    setValue([""])
    setSearchParams({})
    vacancies({})
  }
  const applyHandler = () => {
    const catalogues = search.industry?.split("-").map((optionTitle: string) => {
      const selectedOption: any = multiSelectOptions.find((option: any) => option.title_rus === optionTitle)
      return selectedOption?.key
    })
    vacancies({ catalogues, payment_from: search.payment_from, payment_to: search.payment_to })
  }

  return (
    <Paper className={classes.paper}>
      <Flex className={classes.header}>
        <H3>Фильтры</H3>
        <Text
          className={classes.show}
          onClick={() => setVisible(!visible)}>
          {visible ? "Свернуть" : "Развернуть"}
        </Text>
        {
          visible && (
            <Flex align="center"
                  direction="row"
                  justify="flex-end"
                  onClick={resetFilterHandler}
                  className={classes.reset}>
              <Text className={classes.close}>Сбросить все</Text>
              <Close />
            </Flex>
          )
        }
      </Flex>
      {
        visible && (
          <Box>
            <Box>
              <H4 className={classes.text}>Отрасль</H4>
              <MultiSelect
                data={multiSelectOptions}
                placeholder="Выберете отрасль"
                rightSection={<IconChevronDown size="1rem" />}
                value={value}
                onChange={handleChange}

              />
            </Box>
            <Box>
              <H4 className={classes.text}>Оклад</H4>
              <NumberInput
                placeholder="От"
                className={classes.select}
                value={search.payment_from ? +search.payment_from : ""}
                onChange={paymentFromChange}
              />
              <NumberInput
                placeholder="До"
                value={search.payment_to ? +search.payment_to : ""}
                onChange={paymentToChange}
              />
            </Box>
            <Button className={classes.btn} onClick={applyHandler}>Применить</Button>
          </Box>
        )
      }
    </Paper>
  )
}