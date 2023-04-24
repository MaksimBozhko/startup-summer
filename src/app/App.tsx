import React from "react"
import { Route, Routes } from "react-router-dom"

import "./App.scss"
import { Header } from "../components/header"
import { ROUTES } from "../constant"

function App() {
  return (
    <div className="main">
      <Header />
      <div>
        <Routes>
          <Route path={ROUTES.SEARCH_PAGE} element={<h1></h1>} />
          <Route path={ROUTES.VACANCY_PAGE} element={<h1></h1>} />
          <Route path={ROUTES.SELECTED_PAGE} element={<h1></h1>} />
          <Route path={ROUTES.UNREGISTERED_PAGE} element={<h1></h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
