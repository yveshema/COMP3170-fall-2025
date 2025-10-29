import LoginForm from "./LoginForm";
import Modal from "./Modal";

import '../styles/navigation.css';

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
                <Modal type="Sign in">
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