export default function Product({ image, name, price }) {
    return (
        <div className="product">
            <img src={image} alt={name} />

            <p>
                <span className="pr-name">{name}</span>
                <span className="pr-price">${price}</span>
            </p>
        </div>
    );
}