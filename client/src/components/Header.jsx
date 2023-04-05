import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="header-wrapper">
      <FontAwesomeIcon id="fa-header-icon" icon={faTv} />
      <Navbar />
    </div>
  )
}

export default Header