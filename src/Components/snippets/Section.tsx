import { NavLink } from 'react-bootstrap'
import './styles/Section.css'
import { Link } from 'react-router-dom'

export default function Section() {
    return(
        <section className='home-section'>
            <div className='presentation-letters'>
                <h2>Guinea Ecautorial</h2>

                <div className='about-letters'>
                    <h5>El horizonte de inversiones en un paraíso tropical.</h5>
                    <p>Somos InvestingGuineaEcuatorial, la agencia publica que promueve la inversion extranjera del pais.</p>
                </div>

                <Link className='btn btn-primary' to='/nosotros'>Conozca Mas</Link>

                <footer className="home-section-footer">
                    <p>Siguenos en nuestras redes sociales para mas contenido</p>
                    <ul>
                        <li className='nav-item'>
                            <NavLink href='#facebook'>
                                <i className="bi bi-facebook"></i>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink href='#x'>
                                <i className="bi bi-twitter"></i>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink href='#youtube'>
                                <i className="bi bi-youtube"></i>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink href='#instagram'>
                                <i className="bi bi-instagram"></i>
                            </NavLink>
                        </li>
                    </ul>
                </footer>
            </div>
        </section>
    )
}