import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from "query-string"

import { GreenCard } from "../components"
import { getGreenByName } from "../helpers"
import { StepsPage } from "./StepsPage"
import { ReviewsPage } from "./ReviewsPage"
import { OrchPage } from "./orchPage"
import { GroupsPage } from "./GroupsPage"
import { AppsPage } from "./AppsPage"
import { FooterPage } from "./FooterPage"

export const HomePage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)
  const green =  getGreenByName(q)

  const {searchText, onInputChange} = useForm({
    searchText: q
  })
 
  
  const onSearchSubmit = (e) =>{
    e.preventDefault();
    // if(searchText.trim().length <= 1) return
    navigate(`?q=${searchText}`)
    
  }
  
  return (
    <>
   <section className="contenedor formulario">
        <div className="formulario__grid">
                 <div className="formulario__imagen-contenedor">
                       <img className="formulario__imagen" src={`/assets/img/frutas3.webp`} alt="img fruits"/>
                 </div>
            <div className="formulario__contenido">
                <div className="formulario__campo">
                <h2 className="formulario__heading">Frutas y Verduras Ecológicas <br /> de la Huerta a tu Casa</h2>
                  <h4 className="formulario__label">Población</h4>
                  <div className="formulario__place">  
                    <NavLink
                        className="formulario__location " 
                        to="/bcn"
                        >
                        Barcelona
                    </NavLink>
                    <NavLink 
                        className="formulario__location" 
                        to="/mad"
                        >
                        Madrid
                    </NavLink>
                  </div>

                <form onSubmit={onSearchSubmit} className="formulario__buscar">
                  <div className="formulario__campo">
                      <h4 className="formulario__label2">Busca tu Huerta</h4>
                      <input     
                          className="formulario__input"
                          type="text" 
                          placeholder="Nombre huerta"
                          name="searchText"
                          autoComplete="off"
                          value={searchText}
                          onChange={onInputChange}
                          />
                </div>
                  <button className="formulario__submit">
                      Buscar
                  </button>
                </form>
                </div>
            </div>
        </div>
      </section>

        { 
            (q === '') || (q.length === 0) || (green.length === 0)
            ?  <div> <OrchPage/>  </div>   
            :    
            <div>
                  <img className="pasos__wave" src={`/assets/logos/wave2.svg`} alt="img "/>

                   <div className="huertas animate__animated animate__fadeIn">
                   <h2 className="huertas__heading"> Resultados </h2>
                        <div className="huertas__grid contenedor">
                      { 
                        green.map( e => (
                          <GreenCard hey={e.id} {...e}/>
                          ))}
                        </div>
                  </div>
            </div>
        }

          <StepsPage/>
          <ReviewsPage/>
          <GroupsPage/>
          <AppsPage/>
          <FooterPage/>
   </>
  )
}
