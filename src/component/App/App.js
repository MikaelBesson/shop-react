
import './App.css';
import {Header} from "../Header/Header.js";
import {ProductsList} from "../ProductsList/ProductsList";
import {Cart} from "../Cart/Cart";
import {Categories} from "../Categories/Categories";
import {Counter} from "../Counter/Counter";

import vador from "../../assets/img/vador.jpg";
import trooper from "../../assets/img/trooper.jpg";
import kilo from "../../assets/img/kilo.jpg";
import bobba from "../../assets/img/bobba.jpg";
import k2so from "../../assets/img/k2so.jpg";

import {useState} from "react";



/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    const productsList = [
        {id: 1, cart: 0, name: 'Figurine Vador', img:vador, content: 'une figurine vador ', price: 250, stock: 2},
        {id: 2, cart: 0, name: 'Figurine Trooper', img:trooper, content:'une figurine trooper ', price: 250, stock: 50},
        {id: 3, cart: 0, name: 'Figurine Kilo rein', img:kilo, content:'une figurine kilo rein ', price: 250, stock: 0},
        {id: 4, cart: 0, name: 'Figurine Bobba Feet', img:bobba, content:'une figurine bobba feet ', price: 250, stock: 5},
        {id: 5, cart: 0, name: 'Figurine K2so', img:k2so, content:'une figurine k2so ', price: 250, stock: 10},
    ]



    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);

    if(isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

  return (
      <>
          <Counter />
          <Header />
          <Categories />
          <div className="body">
              <Cart products={products} setIsProductUpdated={setIsProductUpdated}/>
              <ProductsList products={products} setIsProductUpdated={setIsProductUpdated}/>
          </div>
      </>
      );
}

export default App;
