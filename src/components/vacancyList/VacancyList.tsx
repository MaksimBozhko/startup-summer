import React from "react"
import { useSearchParams } from "react-router-dom"


import { Item } from "./vacancy"
import { useGetVacanciesQuery } from "./createAPI"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useDebounce } from "../../hooks/useDebounce"
import { ItemType } from "./types"

export const VacancyList = () => {
  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)
  const debounceValue = useDebounce(search.keyword)
  const { data, isFetching } = useGetVacanciesQuery({ keyword: debounceValue })
  if (isFetching) {
    return <>Loading...</>
  }
  return (
    <>
      {data && data?.objects.map((el: ItemType) => <Item key={el.id}
                                                         profession={el.profession}
                                                         type_of_work={el.type_of_work.title}
                                                         payment_to={el.payment_to}
                                                         payment_from={el.payment_from}
                                                         currency={el.currency}
                                                         town={el.town.title}
      />)}

    </>
  )
}