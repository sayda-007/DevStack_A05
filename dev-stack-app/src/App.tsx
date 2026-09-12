import logo from './assets/logo-text.png'
import './App.css'

function App() {
  return (
    <header className="navbar">
      <nav>
        <div className="brand">
          <a href="#home">
            <img src={logo} alt="Dev Stack" />
          </a>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
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
  )
}

export default App