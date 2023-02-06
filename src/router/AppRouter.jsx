import { Route, Routes } from "react-router-dom"
import { Login } from "../auth"
import { HomeRoutes } from "../orchards"



export const AppRouter = () => {
  return (
   <>
   
        <Routes>
            <Route 
            path = "login"
            element = {<Login/>}
            />
            <Route 
            path = "/*"
            element = {<HomeRoutes/>}
            />
        </Routes>
   </>
  )
}
