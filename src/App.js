import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="banner-logo.jpeg" alt="SpaceX Logo" className="banner-logo" />
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>Information about Dialed In Solutions.</p>
        </section>
        <section>
          <h2>Our Services</h2>
          <p>Machine Learning Gainz Daily</p>
          <p>Deployed straight from github ... </p>
        </section>
      </main>
    </div>
  );
}

export default App;
