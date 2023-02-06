import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getGreenById } from "../helpers";


export const FruitsPage = () => {

  const{id} = useParams()
  const navigate = useNavigate()

 const fruit = getGreenById(id)

 const onNavigateBack = () =>{
    navigate (-1)

}  
  

  if(!fruit){
    return  <Navigate to="/home"/>
  }

  return (
<>
<img className="pasos__wave" src={`/assets/logos/wave2.svg`} alt="img "/>

        <div className="huertas">
            <h2 className="huertas__heading">Huerta</h2>
            <div className="contenedor">

          <div className="favorito">
              <div className="favorito__grid">
                <div className="favorito__img">
                    <img className="" height={200} src={`/assets/img/${id}.webp`} alt="logo orchards" />
                </div>
              </div>
              <div className="favorito__contenido">
                  <h3 className="favorito__nombre">{fruit.name}</h3>
                  <ul>
                      <li className="favorito__location"><b>Localización: </b>{fruit.location}</li>
                      <li className="favorito__descripcion"><b>Descripción: </b><br />{fruit.description}</li>
                  </ul>
                    <button className="favorito__button"
                                  onClick={onNavigateBack}
                                  >
                      Volver
                    </button>
              </div>
          </div>
        </div>
      </div>
<img className="pasos__wave" src={`/assets/logos/wave3.svg`} alt="img "/>
</>
  )
}
