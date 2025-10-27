import Navigation from "./Navigation";
import Minicart from "./Minicart";

import '../styles/header.css';

function AppHeader() {
    return (
        <header className="app-header">
            <div>
                <h1>ShopMart</h1>
                <Minicart likes={5} cartitems={0} />
            </div>

            <Navigation />
        </header>
    );
}

export default AppHeader;