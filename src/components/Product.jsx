import Modal from "./Modal";
import ProductForm from "./ProductForm";

import '../styles/product.css';

export default function Product({ update, remove, product, select, addToCart, controls=true }) {
    return (
        <div className="product" onClick={select}>
            <img src={product.image} alt={product.name} />

            <p>
                <span className="pr-name">{product.name}</span>
                <span className="pr-price">${product.price}</span>
            </p>

            {controls && (
                <div className="action-tray" onClick={(e) => e.stopPropagation()}>
                    <div>
                        <button onClick={() => addToCart(product)}><i className="bx bx-cart"></i></button>
                        <button><i className="bx bx-heart-circle"></i></button>
                    </div>

                    <div>
                        <Modal type="edit">
                            <ProductForm add={update} product={product} />
                        </Modal>
                        <button onClick={() => remove(product.id)}>
                            <i className="bx bx-trash"></i>    
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}