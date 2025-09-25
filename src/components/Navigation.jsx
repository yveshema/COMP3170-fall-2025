import Modal from "./Modal";
import LoginForm from "./LoginForm";

function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>Wishlist</button>
                <button>About</button>
            </nav>

            <div>
                <Modal btnLabel="Login" btnClassName="login-btn">
                    <LoginForm />
                </Modal>
                <form>
                    <input type="search" placeholder="search..." />
                    <button type="button">Go</button>
                </form>
            </div>
            
        </div>
    );
}

export default Navigation;