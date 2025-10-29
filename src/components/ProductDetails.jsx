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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusamus ipsa harum illo id culpa perferendis iste facere, debitis non, inventore consequuntur modi excepturi a deleniti at soluta nemo pariatur itaque, quo commodi laboriosam? Fugit sequi dolores temporibus aliquid ullam.</p>
          <button className="btn primary">Add to cart</button>
        </div>
      </div>

      <div className="related-products">
        <h2>You may also like</h2>
        <div>
          {related.map(product => <Product key={product.id} product={product} controls={false} />)}
        </div>
      </div>
    </div>
  );
}