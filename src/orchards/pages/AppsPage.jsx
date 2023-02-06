

export const AppsPage = () => {
  return (
    <section className="descargar">
        <div className="contenedor descargar__grid">
            <div className="descargar__imagen">
            <img className="" src={`/assets/img/movil.webp`} alt="img phone"/>
            </div>
            <div className="app">
                <h3 className="app__heading">Descarga App</h3>
                <p className="app__texto">Disponible Android y iOS</p>
                <div className="app__grid">
                    <a className="app__enlace" href="#">
                        <img className="" src={`/assets/logos/tienda-android.svg`} alt="img phone"/>
                    </a>
                    <a className="app__enlace" href="#">
                        <img className="" src={`/assets/logos/tienda-apple.svg`} alt="img phone"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
