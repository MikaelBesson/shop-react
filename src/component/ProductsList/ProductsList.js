

import './ProductsList.css';
import vador from '../../assets/img/vador.jpg';
import trooper from '../../assets/img/trooper.jpg';
import kilo from '../../assets/img/kilo.jpg';
import bobba from '../../assets/img/bobba.jpg';
import k2so from '../../assets/img/k2so.jpg';
import {Product} from "../Product/Product";



export const ProductsList = function () {

    const products = [
        {id: 1, name: 'Figurine Vador', img:vador,content: 'description :  une figurine vador ', price: 250, stock: 2},
        {id: 2, name: 'Figurine Trooper', img:trooper,content:'description : une figurine trooper ', price: 250, stock: 50},
        {id: 3, name: 'Figurine Kilo rein', img:kilo,content:'description : une figurine kilo rein ', price: 250, stock: 0},
        {id: 4, name: 'Figurine Bobba Feet', img:bobba,content:'description :une figurine bobba feet ', price: 250, stock: 20},
        {id: 5, name: 'Figurine K2so', img:k2so,content:'description : une figurine k2so ', price: 250, stock: 10},
    ];

    return (
        <ul className='products-list'>
            {products.map(product =>
               <Product data={product}/>
            )}
        </ul>
    );
};