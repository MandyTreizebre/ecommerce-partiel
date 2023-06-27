import {useState, useEffect} from 'react'
import axios from 'axios'

//import des states globales product et basket et de leurs actions (ajout au panier, chargement des produits)
import { getAllProducts, selectProduct } from '../slices/productSlice'
import { changeBasket, selectBasket} from '../slices/basketSlice'
import {useSelector, useDispatch} from "react-redux"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'


const Home = (props) => {
    //récupération des states et de la fonction useDispatch
    const Products = useSelector(selectProduct)
    const Panier = useSelector(selectBasket)
    const dispatch = useDispatch()
    
    //initialisation d'une state min (0) et d'une state max (15)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(15)
    
    
    //lorsque le DOM est chargé
    useEffect(()=>{
        console.log("Les produits", Products)
        //on récup les produits dans l'api 'https://jsonplaceholder.typicode.com/photos?albumId=1'
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then((res)=>{
            console.log(res.data)
            dispatch(getAllProducts(res.data))
        })
        .catch(err=>console.log(err))
            //on met à jour le store sur la state product
    }, [])
    
    const onClickPrev = () => {
        //on vérifie si il peut passer au 15 précédente ou si il n'y en a plus assez
        console.log("Prev");
        if(min >= 15 ){
            setMin(min -15)
            setMax(max -15)
         //on met à jour les states min et max   
        }    
    }
    
    const onClickNext = () => {
        //on vérifie si il peut passer au 15 suivantes ou si il n'y en a plus assez
        console.log("Next");
        if(max + 15 <= Products.product.length) {
            setMin(min +15)
            setMax(max +15)
        }
    }
    
    //fonction d'ajout au panier
    const addProduct = (oldBasket, newProduct) => {
        //la state lorsqu'on la récup de redux est en mode read only (lecture seule)
        //je transforme l'objet en format json puis le retransforme en objet pour le stocker dans myBasket. Il est maintenant modifiable
        let myBasket = JSON.parse(JSON.stringify(oldBasket))


        console.log("Click sur addProduct")

        //on check si le produit que l'on veut mettre dans le panier existe déjà (findIndex renvoi true ou false)
        let same = myBasket.findIndex((b)=>b.infos.id === newProduct.id)
        //si il n'est pastrouvé
        if (same === -1){
            //on crée un objet product qui récup les infos de newProduct et on ajoute une propriété quantity
            let product = {
                infos: newProduct, 
                quantity: 1
            }
            //on push dans le panier le nouveau produit qu'on stock dans une nouvelle variable
            let finalBasket = [...myBasket, product]
            console.log(finalBasket)
            //on dispatch dans le store
            dispatch(changeBasket(finalBasket)) // remplace la valeur du panier par le nouveau panier 
        }  else {  
        //sinon
            //on met à jour la quantité sur le produit déjà présent
            myBasket[same].quantity +=1
            //on dispatch le panier dans le store
            dispatch(changeBasket(myBasket))
        }    
       
    }
    
    return (
        <main>
            {console.log("blabla", Panier)}
            <h1>Page d'accueil</h1>
            
            {Products.product.length > 0 && <div className="list-item">
                {Products.product.slice(min, max).map((product)=>{
                    return (<li key={product.id} className="item">
                        <img src={product.thumbnailUrl}/>
                        <h2>{product.title}</h2>
                        <button onClick={()=>{
                          addProduct(Panier.basket, product) 

                        } } 
                        className='add-basket'
                        >
                           <FontAwesomeIcon icon={faCirclePlus} className='icon-add-item'/>
                        </button>
                    </li>)
                })}
            </div>}

            <button onClick={onClickPrev} className='home-button'>Previous</button>
            <button onClick={onClickNext} className='home-button'>Next</button>

        </main>
    )
}

export default Home