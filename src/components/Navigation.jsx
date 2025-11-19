import LoginForm from "./LoginForm";
import Modal from "./Modal";
import { NavLink } from 'react-router';

import '../styles/navigation.css';

function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <NavLink to="">Home</NavLink>
                <NavLink to="catalog">Catalog</NavLink>
                <NavLink to="about">About</NavLink>
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