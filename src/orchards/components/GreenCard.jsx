import { Link } from "react-router-dom"


export const GreenCard = ({
    id,
    name, 
    location, 
    description
}) => {
    const greenImage = `/assets/img/${id}.webp`
    
  return (
    <div className="favorito">
            <div className="favorito__grid">
                <div className="favorito__img">
                    <img className="" src={greenImage}  alt="logo orchards" />
                </div>
                <div className="favorito__contenido">               
                        <h3 className="favorito__nombre">{name}</h3>
                        <p className="favorito__location">{location}</p>
                        <p className="favorito__descripcion">
                            <small className="d">{description}</small> 
                        </p>
                        <Link className="favorito__button"
                                    to={`/fruits/${id}`}>
                                Ver màs...
                        </Link> 
                </div>
            </div>
        </div>
       
    
  )
}
