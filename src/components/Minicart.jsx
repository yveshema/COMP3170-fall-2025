function Minicart({ likes, cartitems }) {
    return (
        <div>
            <button className="icon-btn">
                <span>&#129293;</span>
                { likes > 0 && <span className="badge">{likes}</span>}
            </button>
            <button className="icon-btn">
                <span>&#128722;</span>
                { cartitems > 0 ? <span className="badge">{cartitems}</span> : null}
            </button>
        </div>
    );
}

export default Minicart;