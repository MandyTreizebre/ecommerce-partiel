import {useState, useEffect} from 'react'
import axios from 'axios'
//import des states globales product et basket et de leurs actions (ajout au panier, chargement des produits)


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    //récupération des states et de la fonction useDispatch
    
    
    //initialisation d'une state min (0) et d'une state max (15)
    
    
    
    //lorsque le DOM est chargé
    
        //on récup les produits dans l'api 'https://jsonplaceholder.typicode.com/photos?albumId=1'
        
            //on met à jour le store sur la state product
            
    
    
    const onClickPrev = () => {
        //on vérifie si il peut passer au 15 précédente ou si il n'y en a plus assez
        
            //on met à jour les states min et max
            
    }
    
    const onClickNext = () => {
        //on vérifie si il peut passer au 15 suivantes ou si il n'y en a plus assez
        
            //on met à jour les states min et max
    }
    
    //fonction d'ajout au panier
    const addProduct = (oldBasket, newProduct) => {
        //la state lorsqu'on la récup de redux est en mode read only (lecture seule)
        //je transforme l'objet en format json puis le retransforme en objet pour le stocker dans myBasket. Il est maintenant modifiable
        
        
        //on check si le produit que l'on veut mettre dans le panier existe déjà (findIndex renvoi true ou false)
        
        //si il n'est pastrouvé
        
            //on crée un objet product qui récup les infos de newProduct et on ajoute une propriété quantity
            
            //on push dans le panier le nouveau produit qu'on stock dans une nouvelle variable
            
            //on dispatch dans le store
            
        //sinon
        
            //on met à jour la quantité sur le produit déjà présent
            
            //on dispatch le panier dans le store
            
            
    }
    
    return (
        <main>
            <h1>Page d'accueil</h1>
            
            
        </main>
    )
}

export default Home