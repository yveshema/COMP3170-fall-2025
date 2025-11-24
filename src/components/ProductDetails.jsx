import '../styles/buttons.css';
import Product from './Product';

export default function ProductDetails({ product, dismiss, related }) {
    return (
        <div className="product-details">
            <header>
                <p>Product / {product.name}</p>
                <button onClick={dismiss}>&#x2715;</button>
            </header>

            <div className="product-desc">
                <div>
                    <img src={product.image} alt={product.name} />
                </div>

                <div>
                    <h2>{product.name}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate voluptas voluptatem animi rem provident ipsa eius doloribus, accusamus, mollitia illo, excepturi repellendus harum hic quisquam aspernatur dignissimos veritatis sit enim.</p>
                    <button className="btn primary">Add to cart</button>
                </div>
            </div>

            <div className="related-products">
                <h2>You may also like</h2>
                <div>
                    {related.map(product => (
                        <Product product={product} key={product.id} showActionTray={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}