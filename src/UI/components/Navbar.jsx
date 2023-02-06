
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate()
    const logo = "/assets/logos/logo-localFruits.svg"


    const onLogin = () =>{
        navigate('/login',{
            replace:true
        })
    }


    return (
        <>
        <header className="header contenedor">
                <div className="header__flex">
                <Link to="/">
                    <img className="header__logo" src={"/assets/logos/logo-localFruits.svg"} alt="logo fruits" />
                </Link>
                <h1 className="header__title"> Local Fruits</h1>
                </div>
          
                <nav className='nav'> 
                    <NavLink className="nav__link" to="/home">
                        Inicio
                    </NavLink>
                    <NavLink className="nav__link" to="/">
                        Nosotros
                    </NavLink>
                    <NavLink className="nav__link" to="/">
                        Recetas
                    </NavLink>
       
                    <button 
                        className="nav__link nav__link--register" 
                        onClick={onLogin}
                        >
                      Iniciar sesión
                    </button>
                </nav>     
        </header>
    </>
    )
}