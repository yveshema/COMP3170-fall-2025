import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <Container fluid className="p-0 m-0">
      <Header />
      <Hero />
      <Container className="vh-100 d-flex flex-column justify-content-center">
        <h2 id="features" className="text-center display-1">Features</h2>
        <Features />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
