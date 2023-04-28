import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { Item } from "./vacancy"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { useActions } from "../../hooks"
import { ItemType } from "../../store/slices/vacancy/types"
import { Pagination } from "../../components/pagination"
import { vacancyThunks } from "../../store/slices/vacancy/slice"
import { MESSAGES } from "./constant"
import { getSelectPage, getTotalCount, getVacancies } from "../../store/slices/vacancy"

export const VacancyList = () => {
  const selectPage = useSelector(getSelectPage)
  const vacancyList = useSelector(getVacancies)
  const totalCount = useSelector(getTotalCount)
  const { vacancies } = useActions(vacancyThunks)

  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  useEffect(() => {
    vacancies({ keyword: search.keyword, count: 4, page: selectPage })
  }, [vacancies, selectPage])

  return (
    <div>
      {
        vacancyList.length
          ? <div>
            {
              vacancyList.map((el: ItemType) => <Item key={el.id}
                                                      id={el.id}
                                                      profession={el.profession}
                                                      type_of_work={el.type_of_work.title}
                                                      payment_to={el.payment_to}
                                                      payment_from={el.payment_from}
                                                      currency={el.currency}
                                                      town={el.town.title}
                                                      titleColor={"var(--secondaryColor)"} />)
            }
            <Pagination totalUserCount={totalCount} currentPage={selectPage} />
          </div>
          : <p>{MESSAGES.NO_VACANCIES}</p>
      }
    </div>
  )
}