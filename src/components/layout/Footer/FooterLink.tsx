import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink = ({ to, children, external = false }: FooterLinkProps) => {
  const baseClasses = "text-[#E5E5E5] hover:text-[#00B4D8] transition-colors duration-200";
  
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={baseClasses}>
      {children}
    </Link>
  );
};

export default FooterLink;