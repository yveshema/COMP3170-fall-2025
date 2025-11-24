import Modal from "./Modal";
import ProductForm from "./ProductForm";

import '../styles/product.css';
import '../styles/buttons.css';

export default function Product({ product, remove, update, select, addToCart, showActionTray=true }) {
    return (
        <div className="product" onClick={select}>
            <img src={product.image} alt={product.name} />

            <p>
                <span className="pr-name">{product.name}</span>
                <span className="pr-price">${product.price}</span>
            </p>
            {showActionTray && (
                <div className="action-tray" onClick={(e) => e.stopPropagation()}>
                    <div>
                        <button onClick={addToCart}><i className="bx bx-cart"></i></button>
                        <button><i className="bx bx-heart-circle"></i></button>
                    </div>

                    <div>
                        <Modal type="edit">
                            <ProductForm product={product} add={update} />
                        </Modal>
                        <button onClick={() => remove(product.id)}><i className="bx bx-trash"></i></button>
                    </div>
                </div>
            )}
            
        </div>
    );
}