import Navigation from "./Navigation";
import Minicart from "./Minicart";

function AppHeader() {
    return (
        <header>
            <div>
                <h1>ShopMart</h1>
                <Minicart likes={5} cartitems={0} />
            </div>

            <Navigation />
        </header>
    );
}

export default AppHeader;