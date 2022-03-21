
import './Product.css';
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";

export const Product = function ({data}) {
    const {id,stock,img,name,content,price } = data;


    return (
        <li key={id} className={'product' + (stock === 0 ? ' out-of-stock' : '')}>
            <div>
                <img src={img} alt="image"/>
            </div>
            <div>
                <div className="title">{name}</div>
                <div className="content">{content} <span className={stock > 0 ? 'in-stock' : 'out-of-stock'}>({stock})</span></div>
                <div className="price-container">
                    <QuantitySelector /><div className="price"><span >${price}</span></div>
                </div>
            </div>

        </li>
        );
};
