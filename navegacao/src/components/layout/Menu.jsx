import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

/**
 * Essa tag "Link" abaixo será convertida num
 * <a href...>
 * 
 * Por isso, inclusive, que o css funciona quando há uma referência para:
 * 
 * .Menu li a {... 
 * 
 * ,porque Link continua sendo um <a href...> no fim das contas!
 */

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/123">Param 01</Link>
                </li>
                <li>
                    <Link to="/param/abc">Param 02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu