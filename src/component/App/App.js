
import './App.css';
import {Header} from "../Header/Header.js";
import {ProductsList} from "../ProductsList/ProductsList";
import {Cart} from "../Cart/Cart";
import {Categories} from "../Categories/Categories";

function App() {
  return (
      <div>
          <div>
              <Header />
          </div>
          <div>
              <Categories />
          </div>
          <div className="body">
              <Cart />
              <ProductsList />
          </div>
      </div>
      );
}

export default App;
