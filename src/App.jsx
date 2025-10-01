import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Resources from './components/Resources';
import Sponsors from './components/Sponsors';

import './App.css';

function App() {

  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <section className="about">
          <h2 id="about">Lorem ipsum dolor sit amet consectetur.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit sequi at sit libero. Eveniet facilis voluptates eum ullam repellat, consequuntur fugiat nobis nisi? Eveniet veniam rerum incidunt, reprehenderit iure repudiandae sunt nisi assumenda doloremque tempora ducimus maxime optio. Minus.</p>
        </section>

        <section>
          <h2 id="features">Features</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus inventore laboriosam ullam, nisi consectetur sequi quae, corporis amet alias, iusto quasi iure natus perspiciatis autem? Dolor illo expedita voluptatum qui?</p>

          <Features />
        </section>

        <section>
          <h2 id="resources">Resources</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consectetur accusamus ab dolor voluptates aspernatur eaque. Et magnam a neque amet illum quaerat animi cum magni deserunt quibusdam, laboriosam asperiores.</p>

          <Resources />
        </section>

        <section>
          <h2 id="sponsors">Sponsors</h2>

          <Sponsors />
        </section>
      </main>

      <footer>
        <p>Copyright &copy; 2025, Yves Shema.</p>

        <p>
          Hero illustration by Photo by <a href="https://unsplash.com/@silverkblack?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vitaly Gariev</a> on <a href="https://unsplash.com/photos/two-businessmen-reviewing-documents-at-a-table-Kul6JqIDA3I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
