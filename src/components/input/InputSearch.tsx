import React from "react"
import { IconSearch } from "@tabler/icons-react"
import { Input } from "@mantine/core"
import { useStyles } from "./styles"

export const InputSearch = () => {
  const { classes } = useStyles()
  return (
    <Input
      className={classes.input}
      icon={<IconSearch />}
      placeholder="Введите название вакансии"
    />
  )
}