import { nanoid } from 'nanoid';

import '../styles/forms.css';

function ProductForm({ product, add }) {

    function handleSubmit(e) {
        // e.preventDefault();
        const data = new FormData(e.target);

<<<<<<< HEAD
=======
        const placeholder = `https://placehold.co/400x500?text=${data.get('pr-name')}`;

>>>>>>> D3-G/week13/demo
        add({
            name: data.get('pr-name'),
            description: data.get('pr-desc'),
            category: data.get('pr-category'),
<<<<<<< HEAD
            image: data.get('pr-image'),
            price: data.get('pr-price'),
=======
            image: data.get('pr-image') || placeholder,
            price: data.get('pr-price') || 0,
>>>>>>> D3-G/week13/demo
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
<<<<<<< HEAD
                <button className="btn primary">Save</button>
=======
                <button className="btn primary" formMethod="dialog">Save</button>
>>>>>>> D3-G/week13/demo
            </form>
        </div>
    )
}

export default ProductForm;