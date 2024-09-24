import PropTypes from "prop-types";

export default function ListLink({ textLink, hRef, className, pathimage }) {
  return (
    <li>
      <a href={hRef} className={className}>
        {textLink}
        {pathimage && <img src={pathimage} alt="Social Media" />}
      </a>
    </li>
  );
}

ListLink.propTypes = {
  textLink: PropTypes.string,
  hRef: PropTypes.string.isRequired,
  className: PropTypes.string,
  pathimage: PropTypes.string,
};
