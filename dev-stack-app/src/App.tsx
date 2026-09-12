import logo from './assets/logo-text.png'
import bannerImage from './assets/banner-stack.png'
import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <nav>
          <div className="brand">
            <a href="#home">
              <img src={logo} alt="Dev Stack" />
            </a>
          </div>

          <div className="nav-links">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <button type="button" className="sign-in">
              Sign In
            </button>

            <button type="button" className="sign-up">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">

              <h1>
                Build Your Ideal
                <span> Development Stack</span>
              </h1>

              <p className="hero-description">
                Explore frontend, backend, database and tooling options, compare them side by side, and put together the stack that fits your next project.
              </p>

              <div className="hero-actions">
                <a href="#technologies" className="primary-button">
                  Explore Technologies
                </a>

                <a href="#about" className="secondary-button">
                  Learn More
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src={bannerImage}
                alt="Developer technologies illustration"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App