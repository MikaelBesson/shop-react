

import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export const Cart = function ({products, setIsProductUpdated}) {


    /**
     * Use for remove items on cart
     */
    function removeItems() {
        for(let product of products) {
            product.cart =0;
        }
        setIsProductUpdated(true);
    }

    return (
        <div className="panier">
            <h1>Panier</h1>
            <ul className="cart-list">
                {products.map(product =>
                    product.cart > 0 &&
                <CartItem key={product.id} product={product} setIsProductUpdated={setIsProductUpdated}/>
                )}
            </ul>
            <div>
                <button onClick={removeItems}>Vider le panier</button>
            </div>
        </div>
    );
}