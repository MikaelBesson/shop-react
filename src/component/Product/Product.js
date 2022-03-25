
import './Product.css';

export const Product = function ({product, setIsProductUpdated}) {

    /**
     * Use for increment a cart
     * @param e
     */
    function handleMinusClick(e) {
        if(product.cart > 0) {
            product.cart -= 1;
            setIsProductUpdated(true);
        }
    }

    /**
     * Use for decrement a cart
     * @param e
     */
    function handlePlusClick(e) {
        if(product.cart < product.stock) {
            product.cart += 1;
            setIsProductUpdated(true);
        }
    }

    return (
        <li key={product.id} className={'product' + (product.stock === 0 ? ' out-of-stock' : '')}>
            <div>
                <img src={product.img} alt="name"/>
            </div>
            <div>
                <div className="title">{product.name}</div>
                <div className="content">Description:<br/>{product.content} <br/>
                    <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>stock: ({product.stock})</span></div>
                <div className="quantity-selector">
                    <button onClick={handleMinusClick}>-</button>
                    <div>{product.cart}</div>
                    <button onClick={handlePlusClick}>+</button>
                </div>
                <div className="price-container">
                    <div className="price"><span >${product.price}</span></div>
                </div>
            </div>
        </li>
        );
};
