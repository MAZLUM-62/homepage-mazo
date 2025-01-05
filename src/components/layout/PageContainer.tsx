import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface PageContainerProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

const PageContainer = ({ children, showBreadcrumbs = true }: PageContainerProps) => {
  return (
    <div className="min-h-screen bg-dark-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showBreadcrumbs && <Breadcrumbs />}
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;