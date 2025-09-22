function Navigation() {
    return (
        <div>
            <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>Wishlist</button>
                <button>About</button>
            </nav>
            <form>
                <input type="search" placeholder="search..." />
                <button type="button">Go</button>
            </form>
        </div>
    );
}

export default Navigation;