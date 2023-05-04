import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"

import s from "./pagination.module.scss"
import { useActions } from "../../hooks"
import { vacancyActions } from "../../store/slices/vacancy/slice"
import { getSearchParams } from "../../common/utils/getSearchParams"
import { ReactComponent as ArrowLeftIcon} from "../../common/assets/img/arrowLeft.svg"
import { ReactComponent as ArrowRightIcon} from "../../common/assets/img/arrowRight.svg"
import { cn } from "../../common/lib/cn"

type PaginationType = {
  totalUserCount: number
  currentPage: number
  portionSize?: number
  pageSize?: number
  onPageChange?: (pageNumber: number) => void
}

export const Pagination = ({ totalUserCount = 10, pageSize = 4, currentPage = 1, portionSize = 3, onPageChange }: PaginationType) => {
  const { setSelectPage } = useActions(vacancyActions)
  const pageCount = Math.ceil(totalUserCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  const portionCount = Math.ceil(pageCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const onClickSelectedPage = (pageNumber: number) => {
    onPageChange && onPageChange(pageNumber)
    setSelectPage(pageNumber)
    if (pageNumber) {
      setSearchParams({ ...search, page: pageNumber })
    }
  }
  return <div className={s.pagination}>
    <button
      className={s.page}
      onClick={() => setPortionNumber(portionNumber - 1)}
      disabled={portionNumber <= 1}>
      <ArrowLeftIcon className={cn(s.icon, { [s.disabled]: portionNumber <= 1 })} />
    </button>
    {
      pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => <span key={p}
                          onClick={() => onClickSelectedPage(p)}
                          className={cn(s.page, {[s.selected]: currentPage === p})}>
        {p}</span>)
    }
    <button
      className={s.page}
      onClick={() => setPortionNumber(portionNumber + 1)}
      disabled={portionCount <= portionNumber}>
      <ArrowRightIcon className={cn(s.icon, { [s.disabled]: portionCount <= portionNumber })} />
    </button>
  </div>
}