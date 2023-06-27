import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
//on importe les fonctionnalitée de redux car je veux afficher dans mon header le nombre d'articles différents dans le panier
import { useSelector } from 'react-redux'
import { selectBasket } from '../slices/basketSlice'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons"


const Header = (props) =>{
    //récupération du panier dans le store
    const myBasket = useSelector(selectBasket)

    const [quantity, setQuantity] = useState(0)
    useEffect(()=>{
        let nbr = 0
        myBasket.basket.map((b)=>{
            nbr += b.quantity
        })
        setQuantity(nbr)
    }, [myBasket])
    
    
    return (
        <header>
            <nav id="menu">
                <Link className="nav-title" to="/">
                    <FontAwesomeIcon icon={faHome} id="shopping"/>
                </Link>
                <Link className="nav-title rela" to="/basket">
                    <FontAwesomeIcon icon={faCartShopping} id="shopping"/>
                    {quantity > 0 && <span>{quantity}</span>}
                </Link>
            </nav>
        </header>
    )
}

export default Header