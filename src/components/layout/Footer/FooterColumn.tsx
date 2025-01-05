import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-[#E5E5E5]">{title}</h3>
      {children}
    </div>
  );
};

export default FooterColumn;