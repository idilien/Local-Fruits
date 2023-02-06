

export const GroupsPage = () => {
  return (
    <>
    <section className="grupos">
        <h2 className="grupos__heading">Fomentando un Cosumo Local y de Proximidad</h2>
        <div className="contenedor grupos__grid">
            <div className="grupos__imagen">
            <img className="formulario__imagen animate__animated animate__fadeIn" src={`/assets/img/frutas2.webp`} alt="img fruits"/>
            </div>
            <div className="grupos__contenido">
                <p className="grupos__texto">
                     Nos referimos a las alternativas de consumo que plantean los Grupos de Consumo, grupos de personas que se ponen en contacto directo con los productores, ecológicos generalmente, y consumen sus productos evitando la actuación de intermediarios.<br/>
                     Algunos productores también llevan sus productos directamente en cajas a domicilio y, en muchas ocasiones, ofrecen la posibilidad a los consumidores de visitar sus terrenos. Estos movimientos promueven lo que se llaman los "canales cortos de comercialización", fomentando un consumo local, de proximidad y una relación directa entre el consumidor y el productor.
                </p>
                     <a className="grupos__enlace" >Leer más...</a>
            </div>
        </div>
    </section>

    <section className="grupos">
        <h2 className="grupos__heading"> Con Certificado Ecológico</h2>
        <div className="contenedor grupos__grid">
            <div className="grupos__imagen">
            <img className="formulario__imagen animate__animated animate__fadeIn" src={`/assets/img/frutas3.webp`} alt="img fruits"/>
            </div>
            <div className="grupos__contenido">
                <p className="grupos__texto">
                En el mundo se han elaborado una serie de sellos de certificación de agricultura ecológica, con los que se suele comercializar la producción ecológica, que garantizan que los productos cumplen con la normativa ecológica. En España nos guiamos por el Reglamento de la Unión Europea (Reglamento (CE) 834/2007), y los encargados de su puesta en práctica y control son Consejos o Comités de Agricultura Ecológica autonómicos. En los productos ecológicos comercializados, si nos fijamos, encontraremos rápidamente la etiqueta de Agricultura Ecológica.
                </p>
                     <a className="grupos__enlace" >Leer más...</a>
            </div>
        </div>
    </section>
</>
  )
}
