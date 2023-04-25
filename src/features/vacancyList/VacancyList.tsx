import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { Item } from "./vacancy"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useActions, useDebounce } from "../../hooks"
import { ItemType } from "../../store/slices/vacancy/types"
import { Pagination } from "../../components/pagination"
import { vacancyThunks } from "../../store/slices/vacancy/slice"

export const VacancyList = () => {
  const selectPage = useSelector((state: any) => state.vacancy.selectPage)
  const vacancyList = useSelector((state: any) => state.vacancy.vacancy)
  const totalCount = useSelector((state: any) => state.vacancy.totalCount)
  const { vacancy } = useActions(vacancyThunks)

  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)
  const debounceValue = useDebounce(search.keyword)

  useEffect(() => {
    vacancy({ keyword: debounceValue, count: 4, page: selectPage })
  }, [selectPage, debounceValue])

  return (
    <div>
      {vacancyList.map((el: ItemType) => <Item key={el.id}
                                               profession={el.profession}
                                               type_of_work={el.type_of_work.title}
                                               payment_to={el.payment_to}
                                               payment_from={el.payment_from}
                                               currency={el.currency}
                                               town={el.town.title}
      />)}
      <Pagination totalUserCount={totalCount} currentPage={selectPage} />
    </div>
  )
}