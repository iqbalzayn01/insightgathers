import PropTypes from "prop-types";

import { ButtonItem } from "./Navbar";

export const MenuMobile = ({ toggle }) => {
  return (
    <ButtonItem
      btnToggle={toggle}
      className="btn-base border border-black font-semibold text-sm md:text-base"
      btnName="Menu"
    />
  );
};

MenuMobile.propTypes = {
  toggle: PropTypes.func.isRequired,
};
