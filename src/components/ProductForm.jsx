import { nanoid } from 'nanoid';

import '../styles/forms.css';

function ProductForm({ product, add }) {

    function handleSubmit(e) {
        // e.preventDefault();
        const data = new FormData(e.target);

        add({
            name: data.get('pr-name'),
            description: data.get('pr-desc'),
            category: data.get('pr-category'),
            image: data.get('pr-image'),
            price: data.get('pr-price'),
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
                    <input name="pr-name" type="text" placeholder="product name..." defaultValue={product?.name} />
                </div>
                <div className="form-control">
                    <label>Description:</label>
                    <input name="pr-desc" type="text" placeholder="description..." defaultValue={product?.description} />
                </div>
                <div className="form-control">
                    <label>Category:</label>
                    <input name="pr-category" type="text" placeholder="category..." defaultValue={product?.category} />
                </div>
                <div className="form-control">
                    <label>Image:</label>
                    <input name="pr-image" type="text" placeholder="https://..." defaultValue={product?.image} />
                </div>
                <div className="form-control">
                    <label>Product price:</label>
                    <input name="pr-price" type="number" defaultValue={product?.price} />
                </div>
                <button className="btn primary">Save</button>
            </form>
        </div>
    )
}

export default ProductForm;