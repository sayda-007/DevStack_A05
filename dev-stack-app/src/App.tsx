import logo from './assets/logo-text.png'
import bannerImage from './assets/banner-stack.png'
import technologiesData from './data/technologies.json'
import type { Technology } from './types'
import './App.css'




function App() {
  const technologies: Technology[] = technologiesData

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

        {/* Hero Section */}
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


        {/* Technologies Section */}
        <section id="technologies" className="technologies">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p className="technologies-description">
            Pick one technology per category to build your ideal stack.
          </p>

          <div className="technology-layout">
            <div className="technology-grid">
              {technologies.map((technology) => (
                <div className="technology-card" key={technology.id}>
                  <img src={technology.icon} alt={technology.name} />

                  <span
                    className="technology-badge"
                    style={{
                      backgroundColor: technology.badgeBg,
                      color: technology.badgeColor,
                    }}
                  >
                    {technology.badge}
                  </span>

                  <div className="card-content">
                    <h3>{technology.name}</h3>

                    <p className="technology-description">
                      {technology.description}
                    </p>
                  </div>

                  <div className="card-meta">
                    <span className="category-pill">
                      {technology.category}
                    </span>

                    <span className="difficulty">
                      {technology.difficulty}
                    </span>

                    <span className="rating">
                      <span className="rating-star">★</span>
                      {technology.rating}
                    </span>
                  </div>

                  <button type="button" className="add-stack-button">
                    Add to Stack
                  </button>
                </div>
              ))}
            </div>

            <aside className="stack-panel">
              <div className="stack-header">
                <h3>Your Stack</h3>
                <span>No technologies selected yet.</span>
              </div>

              <div className="stack-empty">
                <p>Your stack is empty.</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  )
}

export default App