import Image from 'next/image';
import Link from 'next/link';
import ListLink from './list-link';

export const Footer = () => {
  return (
    <footer className="container mx-auto grid gap-10 px-5 py-5">
      <div className="grid md:grid-cols-2 items-end gap-10">
        <div className="flex gap-10">
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-base">Company</li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/events" className="hover:text-gray-400">
              Events
            </Link>
            <Link href="/blog" className="hover:text-gray-400">
              Blog
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              Partners
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              Careers
            </Link>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-base">Support</li>
            <Link href="/contact-us" className="hover:text-gray-400">
              Contact Us
            </Link>
            <Link href="/faq" className="hover:text-gray-400">
              FAQ
            </Link>
          </ul>
        </div>
        <div className="grid gap-5 md:justify-end">
          <span className="font-semibold text-base">Social Media</span>
          <ul className="flex gap-10">
            <Link href="/#twitter" className="hover:text-gray-400">
              <Image
                width={30}
                height={30}
                src="/design/twitter.svg"
                alt="Social Media"
                className="object-cover"
              />
            </Link>
            <Link href="/#instagram" className="hover:text-gray-400">
              <Image
                width={30}
                height={30}
                src="/design/instagram.svg"
                alt="Social Media"
                className="object-cover"
              />
            </Link>
            <Link href="/#linkedin" className="hover:text-gray-400">
              <Image
                width={30}
                height={30}
                src="/design/linkedin.svg"
                alt="Social Media"
                className="object-cover"
              />
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
