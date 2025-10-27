import { nanoid } from 'nanoid';

import '../styles/forms.css';

function ProductForm({ add, product }) {
    
    const placeholder = 'https://placehold.co/400x500?text=Product';

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const newProduct = Object.fromEntries(data.entries());

        // console.log(newProduct);

        add({
            ...newProduct,
            image: newProduct.image || placeholder,
            price: newProduct.price || 0,
            id: product?.id || nanoid(),
        });

        e.target.reset();
    }

    return (
        <div className="form-container">
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Product name:</label>
                    <input name="name" type="text" placeholder="product name..." defaultValue={product?.name} />
                </div>
                <div className="form-control">
                    <label>Description:</label>
                    <input name="description" type="text" placeholder="description..." defaultValue={product?.description} />
                </div>
                <div className="form-control">
                    <label>Category:</label>
                    <input name="category" type="text" placeholder="category..." defaultValue={product?.category} />
                </div>
                <div className="form-control">
                    <label>Image:</label>
                    <input name="image" type="text" placeholder="https://..." defaultValue={product?.image} />
                </div>
                <div className="form-control">
                    <label>Product price:</label>
                    <input name="price" type="number" defaultValue={product?.price} />
                </div>
                <button className="btn primary">Save</button>
            </form>
        </div>
    )
}

export default ProductForm;