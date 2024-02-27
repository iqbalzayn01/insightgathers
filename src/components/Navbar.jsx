import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = ({ className, ulclassName }) => {
  return (
    <nav className={`${className}`}>
      <ul className={`${ulclassName}`}>
        <li>
          <Link to={"/"} className="hover:text-gray-400 text-sm lg:text-base">
            About
          </Link>
        </li>
        <li>
          <Link to={"/"} className="hover:text-gray-400 text-sm lg:text-base">
            Events
          </Link>
        </li>
        <li>
          <Link to={"/"} className="hover:text-gray-400 text-sm lg:text-base">
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/"} className="hover:text-gray-400 text-sm lg:text-base">
            Blog
          </Link>
        </li>
        <li>
          <Link to={"/"} className="hover:text-gray-400 text-sm lg:text-base">
            Partners
          </Link>
        </li>
        <li>
          <Link to={"/"} className="hover:text-gray-400 text-sm lg:text-base">
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  ulclassName: PropTypes.string,
};

export const ButtonItem = ({ className, btnName, btnToggle }) => {
  return (
    <button onClick={btnToggle} className={`${className}`}>
      {btnName}
    </button>
  );
};

ButtonItem.propTypes = {
  className: PropTypes.string,
  btnName: PropTypes.string.isRequired,
  btnToggle: PropTypes.func,
};
