<<<<<<< HEAD
export default function Catalog() {
  return <h1>Catalog Page</h1>;
=======
import { useOutletContext } from "react-router";
import Product from '../components/Product';

export default function Catalog() {
  const { state: { products }} = useOutletContext();

  const categories = new Set(products.map(p => p.category));

  return (
    <div className="catalog">
      {[...categories].map(category => (
        <div key={category}>
          <h2 style={{ textTransform: 'capitalize'}}>{category}</h2>

          <div className="product-listing">
            {products.filter(p => p.category === category).map(product => (
              <Product key={product.id} product={product} showActionTray={false} />
            ))}
          </div>

        </div>

      ))}
    </div>
  );
>>>>>>> D3-G/week13/demo
}