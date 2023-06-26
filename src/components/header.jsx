import {Link} from 'react-router-dom'
//on importe les fonctionnalitée de redux car je veux afficher dans mon header le nombre d'articles différents dans le panier



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons"

const Header = (props) =>{
    //récupération du panier dans le store
    
    
    return (
        <header>
            <nav id="menu">
                <Link className="nav-title" to="/">
                    <FontAwesomeIcon icon={faHome} id="shopping"/>
                </Link>
                <Link className="nav-title rela" to="/basket">
                    <FontAwesomeIcon icon={faCartShopping} id="shopping"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header