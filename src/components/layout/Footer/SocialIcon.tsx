import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E5E5E5] hover:text-[#00B4D8] transition-colors duration-200"
      aria-label={label}
    >
      <Icon size={24} />
    </a>
  );
};

export default SocialIcon;