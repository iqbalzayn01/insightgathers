import { Link } from "react-router-dom";
import ListLink from "../ListLink";

export const Footer = () => {
  return (
    <footer className="2xl:container-base grid gap-10 px-5 py-5">
      <div className="grid md:grid-cols-2 items-end gap-10">
        <div className="flex gap-10">
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-base">Company</li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/events" className="hover:text-gray-400">
              Events
            </Link>
            <Link to="/blog" className="hover:text-gray-400">
              Blog
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              Partners
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              Careers
            </Link>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-base">Support</li>
            <Link to="/contact-us" className="hover:text-gray-400">
              Contact Us
            </Link>
            <Link to="/faq" className="hover:text-gray-400">
              FAQ
            </Link>
          </ul>
        </div>
        <div className="grid gap-5 md:justify-end">
          <span className="font-semibold text-base">Social Media</span>
          <ul className="flex gap-10">
            <Link to="/#twitter" className="hover:text-gray-400">
              <img src="/design/twitter.svg" alt="Social Media" />
            </Link>
            <Link to="/#instagram" className="hover:text-gray-400">
              <img src="/design/instagram.svg" alt="Social Media" />
            </Link>
            <Link to="/#linkedin" className="hover:text-gray-400">
              <img src="/design/linkedin.svg" alt="Social Media" />
            </Link>
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
