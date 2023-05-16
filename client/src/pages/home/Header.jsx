import Navbar from "../../common/Navbar";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div id="header-wrapper">
      <FontAwesomeIcon id="fa-header-icon" icon={faTv} />
      <Navbar />
    </div>
  );
};

export default Header;
