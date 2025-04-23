import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ListLinkProps {
  textLink: string;
  hRef: string;
  className: string;
  pathimage?: string;
}

export default function ListLink({
  textLink,
  hRef,
  className,
  pathimage,
}: ListLinkProps) {
  return (
    <li>
      <Link href={hRef} className={className}>
        {textLink}
        {pathimage && (
          <Image width={30} height={30} src={pathimage} alt="Social Media" />
        )}
      </Link>
    </li>
  );
}
