import React from 'react';

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
      <a href={hRef} className={className}>
        {textLink}
        {pathimage && <img src={pathimage} alt="Social Media" />}
      </a>
    </li>
  );
}
