import Navigation from "./Navigation";
import Minicart from "./Minicart";
import Modal from "./Modal";
import ProductForm from "./ProductForm";

function AppHeader({ add }) {
    return (
        <header>
            <div>
                <h1>ShopMart</h1>
                <Minicart likes={5} cartitems={0} />
            </div>

            <Navigation />

            <div>
                <Modal btnLabel="New" btnClassName="btn primary">
                    <ProductForm add={add} />
                </Modal>
            </div>
        </header>
    );
}

export default AppHeader;