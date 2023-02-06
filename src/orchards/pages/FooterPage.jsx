

export const FooterPage = () => {
  return (
   <footer className="footer">
        <div className="contenedor footer__grid">
            <div className="footer__widget">
                <h3 className="footer__heading">Nosotros</h3>
                <p className="footer__texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odio nemo magni numquam</p>
            </div>
            <div className="footer__widget">
                <h3 className="footer__heading">Navegación</h3>
                <nav className="footer__nav">
                    <a className="footer__link" href="">Enalce 1</a>
                    <a className="footer__link" href="">Enalce 2</a>
                    <a className="footer__link" href="">Enalce 3</a>
                </nav>
            </div>
            <div className="footer__widget">
                <h3 className="footer__heading">Conatcto</h3>
                <p className="footer__texto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odio nemo magni numquam</p>
            </div>
        </div>
            <p className="footer__copy">
            Todos los derechos reservados. Local Eco Vegetables
            </p>
   </footer>
  )
}
