import Modal from "./Modal";
import ProductForm from "./ProductForm";

import '../styles/product.css';
import '../styles/buttons.css';

export default function Product({ product, remove, update }) {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />

            <p>
                <span className="pr-name">{product.name}</span>
                <span className="pr-price">${product.price}</span>
            </p>
            <div>
                <button onClick={() => remove(product.id)}>Delete</button>
                <Modal btnLabel="Edit" btnClassName="btn">
                    <ProductForm add={update} product={product} />
                </Modal>
            </div>
        </div>
    );
}