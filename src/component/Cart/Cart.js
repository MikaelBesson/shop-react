

import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export const Cart = function () {

    const items = [
        {id: 1, name:'Figurine Vador',quantity:1},
        {id: 2, name:'Figurine Trooper',quantity:10},
        {id: 3, name:'Bobba Feet',quantity:1},
    ]
    return (
        <div className="panier">
            <h1>Panier</h1>
            <ul className="cart-list">
                {items.map(item =>
                <CartItem data={item}/>
                )}
            </ul>
            <div>
                <button>Vider le panier</button>
            </div>
        </div>
    );
}