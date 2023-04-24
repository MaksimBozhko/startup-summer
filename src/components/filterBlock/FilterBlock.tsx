import React from "react"
import { Button, Flex, MultiSelect, Paper } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"

import { useStyles } from "./styles"
import { ReactComponent as Close} from "../../common/assets/img/close.svg"

export const FilterBlock = () => {
  const {classes} = useStyles()

  const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];
  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <p className={classes.title}>Фильтры</p>
        <Flex align="center" direction="row" justify="flex-end">
          <p className={classes.close}>Сбросить все</p>
          <Close/>
        </Flex>
      </div>
      <div>
        <p className={classes.text}>Отрасль</p>
        <MultiSelect
          data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
          placeholder="Выберете отрасль"
          rightSection={<IconChevronDown size="1rem" />}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          rightSectionWidth={40}
        />
      </div>
      <div>
        <p className={classes.text}>Оклад</p>
        <MultiSelect
          data={data}
          placeholder="От"
          className={classes.select}
        />
        <MultiSelect
          data={data}
          placeholder="До"
        />
      </div>
      <Button className={classes.btn}>Применить</Button>
    </Paper>
  )
}