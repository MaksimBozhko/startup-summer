import React, { useState } from "react"
import { IconArrowBadgeLeft, IconArrowBadgeRight } from "@tabler/icons-react"

import s from "./pagination.module.scss"
import { useActions } from "../../hooks"
import { vacancyActions } from "../../store/slices/vacancy/slice"

type PaginationType = {
  totalUserCount: number
  currentPage: number
  portionSize?: number
  pageSize?: number
}

export const Pagination = ({ totalUserCount = 10, pageSize = 3, currentPage, portionSize = 3 }: PaginationType) => {
  const { setSelectPage } = useActions(vacancyActions)
  const pageCount = Math.ceil(totalUserCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pageCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const onClickSelectedPage = (pageNumber: number) => {
    setSelectPage(pageNumber)
  }
  return <div className={s.pagination}>
    <button
      className={`${s.btn} ${s.page}`}
      onClick={() => setPortionNumber(portionNumber - 1)}
      disabled={portionNumber <= 1}>
      <IconArrowBadgeLeft />
    </button>
    {
      pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => <span key={p}
                          onClick={() => onClickSelectedPage(p)}
                          className={currentPage == p ? `${s.selected} ${s.page}` : s.page}>
        {p}</span>)
    }
    <button
      className={`${s.btn} ${s.page}`}
      onClick={() => setPortionNumber(portionNumber + 1)}
      disabled={portionCount <= portionNumber}>
      <IconArrowBadgeRight />
    </button>
  </div>
}