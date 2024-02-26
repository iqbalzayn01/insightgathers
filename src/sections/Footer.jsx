import PropTypes from "prop-types";

export const Footer = () => {
  return (
    <footer className="2xl:container-base grid gap-10 px-5 py-5">
      <div className="grid md:grid-cols-2 items-end gap-10">
        <div className="flex gap-10">
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-base">Company</li>
            <ListLink
              hRef={`#About`}
              textLink="About"
              className={`hover:text-gray-400`}
            />
            <ListLink
              hRef={`#Events`}
              textLink="Events"
              className={`hover:text-gray-400`}
            />
            <ListLink
              hRef={`#Blog`}
              textLink="Blog"
              className={`hover:text-gray-400`}
            />
            <ListLink
              hRef={`#Partners`}
              textLink="Partners"
              className={`hover:text-gray-400`}
            />
            <ListLink
              hRef={`#Careers`}
              textLink="Careers"
              className={`hover:text-gray-400`}
            />
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-base">Support</li>
            <ListLink
              hRef={`#ContactUs`}
              textLink="Contact Us"
              className={`hover:text-gray-400`}
            />
            <ListLink
              hRef={`#FAQ`}
              textLink="FAQ"
              className={`hover:text-gray-400`}
            />
          </ul>
        </div>
        <div className="grid gap-5 md:justify-end">
          <span className="font-semibold text-base">Social Media</span>
          <ul className="flex gap-10">
            <ListLink hRef={`#twitter`} pathimage={`/design/twitter.svg`} />
            <ListLink hRef={`#instagram`} pathimage={`/design/instagram.svg`} />
            <ListLink hRef={`#linkedin`} pathimage={`/design/linkedin.svg`} />
          </ul>
        </div>
      </div>
      <hr className="border border-gray-300" />
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
        <span className="font-semibold text-base">
          Copyright © 2024 Iqbal Zayyan All Right Reserved
        </span>
        <ul className="flex gap-10">
          <ListLink
            hRef={`#terms-of-service`}
            textLink="Terms of Service"
            className={`font-semibold text-base hover:text-gray-400`}
          />
          <ListLink
            hRef={`#privacy-police`}
            textLink="Privacy Police"
            className={`font-semibold text-base hover:text-gray-400`}
          />
        </ul>
      </div>
    </footer>
  );
};

const ListLink = ({ textLink, hRef, className, pathimage }) => {
  return (
    <li>
      <a href={hRef} className={className}>
        {textLink}
        {pathimage && <img src={pathimage} alt="Social Media" />}
      </a>
    </li>
  );
};

ListLink.propTypes = {
  textLink: PropTypes.string,
  hRef: PropTypes.string.isRequired,
  className: PropTypes.string,
  pathimage: PropTypes.string,
};
