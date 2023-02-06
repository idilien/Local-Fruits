

export const StepsPage = () => {
  return (
    <section className="pasos">
        <div className="pasos__contenido">
            <h2 className="pasos__heading">Cómo funciona? <span className="pasos__heading--descripcion">tan fácil!! solo en tres pasos</span></h2>
            <div className="pasos__grid contenedor">
                <div className="pasos__card">
                    <img className="pasos__imagen" src={`/assets/img/mad-campillo.webp`} alt="img campillo"/>
                    <h4 className="pasos__text">Selecciona una Huerta </h4>
                </div>
                <div className="pasos__card">
                    <img className="pasos__imagen" src={`/assets/img/paso2.webp`} alt="img campillo"/>
                    <h4 className="pasos__text">Elige tus productos </h4>
                </div>
                <div className="pasos__card">
                    <img className="pasos__imagen" src={`/assets/img/paso3.webp`} alt="img campillo"/>
                    <h4 className="pasos__text">Envio al Instante</h4>
                </div>
            </div>
        </div>
        <img className="pasos__wave" src={`/assets/logos/wave3.svg`} alt="img "/>
    </section>
 
  )
}
