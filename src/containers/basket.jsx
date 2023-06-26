import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
//on importe la state de basket de redux + son/ses actions


const Basket = (props) => {
    //on récup la state basket
    
    //on récup la fonction useDispatch
    
    const RemoveToBasket = (oldBasket, product) => {
        //la state lorsqu'on la récup de redux est en mode read only (lecture seule)
        //je transforme l'objet en format json puis le retransforme en objet pour le stocker dans myBasket. Il est maintenant modifiable
        
        //on copie le tableau du panier sans le produit qu'on  veut supprimer (array.filter()) 
        
        //on dispatch le nouveau panier dans le store
        
    }
    
    return (
        <main>
            <h1>Mon panier de Lord!</h1>
            
        </main>
    )
}

export default Basket