import React from "react"
import { Route, Routes } from "react-router-dom"

import "./App.scss"
import { Header } from "../components/header"
import { ROUTES } from "../constant"
import { Search } from "../pages/search"
import { Vacancy } from "../pages/vacancy"
import { Selected } from "../pages/selected"
import { NotFound } from "../pages/notFound"

export function App() {
  return (
    <div className="main">
      <Header />
      <div className="root">
        <Routes>
          <Route path={ROUTES.SEARCH_PAGE} element={<Search />} />
          <Route path={ROUTES.VACANCY_PAGE} element={<Vacancy />} />
          <Route path={ROUTES.SELECTED_PAGE} element={<Selected />} />
          <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}