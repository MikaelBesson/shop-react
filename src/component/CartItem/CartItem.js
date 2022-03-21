
import './CartItem.css';

import poubelle from '../../assets/img/poubelle.png';
import '../../assets/img/poubelle.png';


export const CartItem = function ({data}) {
    const {id,name,quantity} = data;

    return (
        <li key={id} className="cartItem">
                <img src={poubelle} alt=""/>
                <span>{name}</span>
                <span>({quantity})</span>
        </li>
    );
}