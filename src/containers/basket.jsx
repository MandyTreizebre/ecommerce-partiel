//on importe la state de basket de redux + son/ses actions
import {useSelector, useDispatch} from "react-redux"
import { changeBasket, selectBasket } from '../slices/basketSlice'

const Basket = (props) => {
    //on récup la state basket
    const myBasket = useSelector(selectBasket)
    //on récup la fonction useDispatch
    const dispatch = useDispatch()

    const RemoveToBasket = (oldBasket, product) => {
        console.log("On veut supprimer l'élément cliqué", myBasket)
        //la state lorsqu'on la récup de redux est en mode read only (lecture seule)
        //je transforme l'objet en format json puis le retransforme en objet pour le stocker dans myBasket. Il est maintenant modifiable
        let panier = JSON.parse(JSON.stringify(oldBasket))
        //on copie le tableau du panier sans le produit qu'on veut supprimer (array.filter()) 
        //let monPanier = myBasket.filter(removeOneProduct(product))
        let newBasket = panier.filter((b)=> b.infos.id !== product.infos.id)
        console.log("Le myBasket avec l'item en moins =>", myBasket)
        //on dispatch le nouveau panier dans le store
        dispatch(changeBasket(newBasket))
    }

    const removeOne = (oldBasket, product) => {
        let panier  = JSON.parse(JSON.stringify(oldBasket))
        //on récup le produit du panier correspondant au product qu'on veut modifier
        let index = panier.findIndex((b)=>b.infos.id === product.infos.id)
        
        if(index !== -1){
            if(panier[index].quantity > 1){
                panier[index].quantity -= 1
                dispatch(changeBasket(panier))
            }else{
                let newBasket = panier.filter((b) => b.infos.id !== product.infos.id)
                dispatch(changeBasket(newBasket))
            }
        }
    }

    const addOne = (oldBasket, product) => {
        let panier  = JSON.parse(JSON.stringify(oldBasket))
        let index = panier.findIndex((b)=>b.infos.id === product.infos.id)
        
        if(index !== -1){
            panier[index].quantity += 1
            dispatch(changeBasket(panier))
        }
    }
    


    return (
        <main>
            <h1>Mon panier</h1>
            {myBasket.basket.length > 0 ? <section>
                {myBasket.basket.map((b)=>{
                    return (<article key={b.infos.id} className="basket-item">
                        <img src={b.infos.thumbnailUrl}/>
                        <div className="info">
                            <h3>{b.infos.title}</h3>
                            <p>{b.quantity}</p>
                            <button onClick={()=>{
                                removeOne(myBasket.basket, b)
                            }}>-</button>
                            <button onClick={()=>{
                                addOne(myBasket.basket, b)
                            }}>+</button>
                            <a href="#"
                                className="deleteItem"
                                onClick={()=>{
                                    RemoveToBasket(myBasket.basket, b)
                                }}
                            >
                                Supprimer ce produit
                            </a>
                        </div>
                    </article>)
                })}
            </section> : <p>Votre panier est vide...</p>}
        </main>
    )
}

export default Basket