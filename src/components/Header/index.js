import {Link} from 'react-router-dom'
// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="wave">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo-image"
        alt="wave"
      />
      <h1 className="heading">Wave</h1>
    </div>

    <ul className="nav-items">
      <li>
        <Link className="nav" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
