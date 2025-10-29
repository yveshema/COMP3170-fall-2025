import Navigation from "./Navigation";
import Minicart from "./Minicart";

import '../styles/header.css';

function AppHeader({ children }) {
    return (
        <header className="app-header">
            <div>
                <h1>ShopMart</h1>
                {children}
            </div>

            <Navigation />
        </header>
    );
}

export default AppHeader;