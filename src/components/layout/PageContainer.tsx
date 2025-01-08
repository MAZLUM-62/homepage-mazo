import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface PageContainerProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

const PageContainer = ({ children, showBreadcrumbs = true }: PageContainerProps) => {
  return (
    <div className="min-h-screen bg-dark-900 ">
      <div className="max-w mx-auto">
      {/*showBreadcrumbs && <Breadcrumbs />*/} 
        <div className="mt-8">
          {children}</div>
      </div>
    </div>
  );
};

export default PageContainer;