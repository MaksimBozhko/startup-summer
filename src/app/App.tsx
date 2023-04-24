import React from "react"
import { Route, Routes } from "react-router-dom"

import "./App.scss"
import { Header } from "../components/header"
import { ROUTES } from "../constant"
import { Search } from "../pages/search"

function App() {
  return (
    <div className="main">
      <Header />
      <div className="root">
        <Routes>
          <Route path={ROUTES.SEARCH_PAGE} element={<Search/>} />
          <Route path={ROUTES.VACANCY_PAGE} element={<h1></h1>} />
          <Route path={ROUTES.SELECTED_PAGE} element={<h1></h1>} />
          <Route path={ROUTES.UNREGISTERED_PAGE} element={<h1></h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
