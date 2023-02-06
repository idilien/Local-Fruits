

export const OrchPage = () => {
  return (
    <>
        <img className="pasos__wave" src={`/assets/logos/wave2.svg`} alt="img "/>
   <main className="huertas">
      <h2 className="huertas__heading">Nuestras Huertas Favoritas</h2>
      <div className="contenedor huertas__grid">

        <div className="favorito">
          <div className="favorito__grid">
              <div className="favorito__img">
              <img className="" src={`/assets/img/mad-soria.webp`} alt="img fruits"/>
              </div>
              <div className="favorito__contenido">
              <img className="" src={`/assets/img/estrellas.png`} alt="img star"/>
              <h3 className="favorito__nombre">Huerta de Soria</h3>
              <p className="favorito__location">Madrid</p>
              <p className="favorito__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi voluptatibus quo omnis. </p>
              </div>
          </div>   
        </div>
        <div className="favorito">
          <div className="favorito__grid">
              <div className="favorito__img">
              <img className="" src={`/assets/img/mad-club.webp`} alt="img fruits"/>
              </div>
              <div className="favorito__contenido">
              <img className="" src={`/assets/img/estrellas.png`} alt="img star"/>
              <h3 className="favorito__nombre">Huerta Club</h3>
              <p className="favorito__location">Barcelona</p>
              <p className="favorito__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi voluptatibus quo omnis. </p>
              </div>
          </div>   
        </div>
        <div className="favorito">
          <div className="favorito__grid">
              <div className="favorito__img">
              <img className="" src={`/assets/img/bcn-express.webp`} alt="img fruits"/>
              </div>
              <div className="favorito__contenido">
              <img className="" src={`/assets/img/estrellas.png`} alt="img star"/>
              <h3 className="favorito__nombre">Huerta Express</h3>
              <h3 className="favorito__location">Madrid</h3>
              <p className="favorito__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi voluptatibus quo omnis. </p>
              </div>
          </div>   
        </div>
        <div className="favorito">
          <div className="favorito__grid">
              <div className="favorito__img">
              <img className="" src={`/assets/img/bcn-lahuerta.webp`} alt="img fruits"/>
              </div>
              <div className="favorito__contenido">
              <img className="" src={`/assets/img/estrellas.png`} alt="img star"/>
              <h3 className="favorito__nombre">La Huerta</h3>
              <p className="favorito__location">Barcelona</p>
              <p className="favorito__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi voluptatibus quo omnis. </p>
              </div>
          </div>   
        </div>
      </div>
   </main>
    </>
  )
}
