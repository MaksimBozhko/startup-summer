import React, { useEffect } from "react"
import { authAPI, cataloguesAPI, vacancyAPI } from "../../api/api"

export const Login = () => {
  useEffect(() => {
    authAPI.login()
      .then((res) => {
        console.log(res.data)
        vacancyAPI.vacancy(res.data.access_token)
          .then((res) => {
            debugger
          })
          .catch((res) => {
            debugger
          })
      })
      .catch((res) => {
        debugger
      })
    // cataloguesAPI.catalogues()
    //   .then((res) => {
    //       debugger
    //           })
  }, [])
  return (
    <div>
login
    </div>
  )
}