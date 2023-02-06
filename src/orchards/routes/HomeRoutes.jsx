import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI"

import { HomePage, MadPage, BcnPage, FruitsPage } from "../pages"


export const HomeRoutes = () => {
  return (
    <>
            <Navbar/>
         <div className="container">
            <Routes>
                    <Route 
                        path = "home"
                        element = {<HomePage/>}
                        />
                    <Route 
                        path = "mad"
                        element = {<MadPage/>}
                        />
                    <Route 
                        path = "bcn"
                        element = {<BcnPage/>}
                        />
                    <Route 
                        path = "fruits/:id"
                        element = {<FruitsPage/>}
                        />
                    <Route 
                        path = "/"
                        element = { <Navigate to = "/Home"/>}
                        />
            </Routes>
        </div>   
    </>
  )
}
