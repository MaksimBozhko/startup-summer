import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import "./index.scss"
import { store } from "./store"
import { App } from "./app"
import { ROUTES } from "./constant"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <BrowserRouter basename={ROUTES.BASE_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)