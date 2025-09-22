import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Product from "./components/Product";

const product1 = {
  name: "Running shoes",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
  price: "24"
}

const product2 = {
  name: "Sport Jacket",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
  price: "109.99"
}

const products = [
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24"
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99"
  },
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24"
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99"
  },
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24"
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99"
  },
];

function renderProduct(product, index) {
  return <Product {...product} key={index} />;
}

function App() {
  return (
    <div className="app">
      <section id="content">
        <AppHeader />
        <Main>
          {products.map(renderProduct)}
        </Main>

      </section>
      <Footer />
    </div>
  )
}

export default App;
