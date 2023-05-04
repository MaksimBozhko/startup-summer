import { useState } from 'react';
import { useSelector } from "react-redux"
import { Flex } from "@mantine/core"

import { EmptySelectedPage } from "../../components/emptySelectedPage"
import { getSelectedVacancies } from "../../store/slices/selected"
import { Item } from "../../features/vacancyList/vacancy"
import { Pagination } from '../../components/pagination';
import { useSearchParams } from "react-router-dom"
import { getSearchParams } from "../../common/utils/getSearchParams"

export const Selected = () => {
  const vacancies = useSelector(getSelectedVacancies);

  const [searchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  const [currentPage, setCurrentPage] = useState(search.page || 1);

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;

  const vacanciesShow = vacancies.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {
        vacanciesShow.length
          ? <Flex
            align="center"
            direction="column">
            {
              vacanciesShow.map((vacancy) => <Item
                key={vacancy.id}
                vacancy={vacancy}
                titleColor={"var(--secondaryColor)"} />)
            }
            <Pagination totalUserCount={vacancies.length} currentPage={currentPage} onPageChange={handlePageChange} />
          </Flex>
          : <EmptySelectedPage />
      }
    </>
  )
}