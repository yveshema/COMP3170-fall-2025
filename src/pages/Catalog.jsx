import { useOutletContext } from "react-router";

import Product from "../components/Product";

export default function Catalog() {
  
  const { products } = useOutletContext();

  const categories = new Set(products.map(product => product.category));

  return (
    <div className="catalog">
      {Array.from(categories).map(category => (
        <div key={category}>
          <h2 style={{ textTransform: 'capitalize'}}>{category}</h2>
          <div className="product-listing">
            {products.filter(p => p.category === category).map(product => (
              <Product key={product.id} product={product} showTray={false} />
            ))}
          </div>
          
        </div>
      ))}
    </div>
  )
}