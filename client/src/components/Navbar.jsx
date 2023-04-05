import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav id="main-nav">
        <ul id="nav-ul">
            <li className="nav-li">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-li">
              <Link to="/brands">TV brands</Link>
            </li>
            <li className="nav-li">
              <Link to="/models">TV models</Link>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar