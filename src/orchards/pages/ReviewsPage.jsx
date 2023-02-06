

export const ReviewsPage = () => {
  return (
   <section className="contenedor coment">
        <h2 className="coment__opiniones">Opiniones</h2>
        <div className="coment__grid">
            <div className="comentarios">
                <header className="comentarios__header">
                    <div className="comentarios__img">
                    <img src={`/assets/img/testimonial1.jpg`} alt="img coment"/>
                    </div>
                    <div className="comentarios__info">
                        <p className="comentarios__autor">Oscar Santamaria</p>
                        <img src={`/assets/img/estrellas.png`} alt="img stars"/>
                    </div>
                </header>
                <blockquote className="comentarios__texto">
                Una excelente app, puedo seleccionar de una gran cantidad de muy buenos productos de gran sabor y calidad.
                </blockquote>
            </div>
            <div className="comentarios">
                <header className="comentarios__header">
                    <div className="comentarios__img">
                    <img src={`/assets/img/testimonial2.jpg`} alt="img coment"/>
                    </div>
                    <div className="comentarios__info">
                        <p className="comentarios__autor">Ana Baranda</p>
                        <img src={`/assets/img/estrellas.png`} alt="img stars"/>
                    </div>
                </header>
                <blockquote className="comentarios__texto">
                Una excelente app, puedo seleccionar de una gran cantidad de muy buenos productos de gran sabor y calidad.
                </blockquote>
            </div>
            <div className="comentarios">
                <header className="comentarios__header">
                    <div className="comentarios__img">
                    <img src={`/assets/img/testimonial3.jpg`} alt="img coment"/>
                    </div>
                    <div className="comentarios__info">
                        <p className="comentarios__autor">Julio Gonzalez</p>
                        <img src={`/assets/img/estrellas.png`} alt="img stars"/>
                    </div>
                </header>
                <blockquote className="comentarios__texto">
                Una excelente app, puedo seleccionar de una gran cantidad de muy buenos productos de gran sabor y calidad.
                </blockquote>
            </div>
            <div className="comentarios">
                <header className="comentarios__header">
                    <div className="comentarios__img">
                    <img src={`/assets/img/testimonial4.jpg`} alt="img coment"/>
                    </div>
                    <div className="comentarios__info">
                        <p className="comentarios__autor">Roser Contreras</p>
                        <img src={`/assets/img/estrellas.png`} alt="img stars"/>
                    </div>
                </header>
                <blockquote className="comentarios__texto">
                Una excelente app, puedo seleccionar de una gran cantidad de muy buenos productos de gran sabor y calidad.
                </blockquote>
            </div>
            <div className="comentarios">
                <header className="comentarios__header">
                    <div className="comentarios__img">
                    <img src={`/assets/img/testimonial5.jpg`} alt="img coment"/>
                    </div>
                    <div className="comentarios__info">
                        <p className="comentarios__autor">Marta Fornos</p>
                        <img src={`/assets/img/estrellas.png`} alt="img stars"/>
                    </div>
                </header>
                <blockquote className="comentarios__texto">
                Una excelente app, puedo seleccionar de una gran cantidad de muy buenos productos de gran sabor y calidad.
                </blockquote>
            </div>

            
        </div>

   </section>
  )
}
