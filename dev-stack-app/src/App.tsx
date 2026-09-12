import logo from './assets/logo-text.png'
import bannerImage from './assets/banner-stack.png'
import technologiesData from './data/technologies.json'
import type { Technology } from './types'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'




function App() {
  const technologies: Technology[] = technologiesData

  const [stack, setStack] = useState<Technology[]>([])

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setStack((prevStack) => [...prevStack, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  const removeFromStack = (technologyId: string) => {
    const technology = stack.find((item) => item.id === technologyId)

    setStack((prevStack) =>
      prevStack.filter((item) => item.id !== technologyId)
    )

    if (technology) {
      toast.success(`${technology.name} removed from your stack!`)
    }
  }

  const removeAllFromStack = () => {
    setStack([])
    toast.success('All technologies removed from your stack!')
  }



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
          <div className="technology-content">
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

                    <button
                      type="button"
                      className="add-stack-button"
                      onClick={() => addToStack(technology)}
                      disabled={stack.some((item) => item.id === technology.id)}
                    >
                      {stack.some((item) => item.id === technology.id)
                        ? '✓ Added to Stack'
                        : 'Add to Stack'}
                    </button>
                  </div>
                ))}
              </div>

              <aside className="stack-panel">

                <div className="stack-header">
                  <h3>Your Stack</h3>
                  <span>
                    {stack.length === 0
                      ? 'No technologies selected yet.'
                      : `${stack.length} Technology Selected`}
                  </span>
                </div>

                {stack.length === 0 ? (
                  <div className="stack-empty">
                    <p>Your stack is empty.</p>
                  </div>
                ) : (
                  <>
                    <div className="stack-items">
                      {stack.map((technology) => (
                        <div className="stack-item" key={technology.id}>
                          <img src={technology.icon} alt={technology.name} />

                          <div className="stack-item-info">
                            <h4>{technology.name}</h4>
                            <span>{technology.category}</span>
                          </div>

                          <button
                            type="button"
                            className="remove-stack-button"
                            onClick={() => removeFromStack(technology.id)}
                            aria-label={`Remove ${technology.name}`}
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>

                    {stack.length > 0 && (
                      <button
                        type="button"
                        className="remove-all-button"
                        onClick={removeAllFromStack}
                      >
                        Remove All
                      </button>
                    )}
                  </>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App