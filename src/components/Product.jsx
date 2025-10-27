import Modal from "./Modal";
import ProductForm from "./ProductForm";

import '../styles/product.css';

export default function Product({ update, remove, product }) {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />

            <p>
                <span className="pr-name">{product.name}</span>
                <span className="pr-price">${product.price}</span>
            </p>
            <div>
                <Modal btnLabel="edit" btnClassName="btn primary">
                    <ProductForm add={update} product={product} />
                </Modal>
                <button onClick={() => remove(product.id)}>Delete</button>
            </div>
        </div>
    );
}