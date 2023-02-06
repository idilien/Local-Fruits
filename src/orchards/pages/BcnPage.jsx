import { GreenList } from "../components"



export const BcnPage = () => {
  return (
   <>
    <img className="pasos__wave" src={`/assets/logos/wave2.svg`} alt="img "/>
     <div className="huertas">
      <h2 className="huertas__heading">Cerca de Barcelona</h2>
      <div className="contenedor huertas__grid">
            <GreenList location='Barcelona'/>
      </div>
    </div>
    <img className="pasos__wave" src={`/assets/logos/wave3.svg`} alt="img "/>
      
      
</>
  )
}
