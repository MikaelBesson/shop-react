
import './CartItem.css';

import poubelle from '../../assets/img/poubelle.png';
import '../../assets/img/poubelle.png';


export const CartItem = function ({product, setIsProductUpdated}) {
    const {id,name,cart} = product;

    /**
     * Use for view items on cart
     */
    function removeProduct() {
        product.cart = 0 ;
        setIsProductUpdated(true);
    }

    return (
        <li key={id} className="cartItem">
                <img src={poubelle} alt={name} onClick={removeProduct}/>
                <span>{name}</span>
                <span>({cart})</span>
        </li>
    );
}