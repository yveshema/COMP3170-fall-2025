function ProductForm() {
    return (
        <div className="form-container">
            <h2>New Product</h2>
            <form>
                <div className="form-control">
                    <label>Product name:</label>
                    <input name="pr-name" type="text" placeholder="product name..." />
                </div>
                <div className="form-control">
                    <label>Description:</label>
                    <input name="pr-desc" type="text" placeholder="description..." />
                </div>
                <div className="form-control">
                    <label>Product price:</label>
                    <input name="pr-price" type="number" />
                </div>
                <button className="btn primary">Save</button>
            </form>
        </div>
    )
}

export default ProductForm;