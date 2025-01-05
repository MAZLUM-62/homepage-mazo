import React from 'react';
import Hero from '../components/home/Hero';
import PageContainer from '../components/layout/PageContainer';

const Home = () => {
  return (
    <PageContainer showBreadcrumbs={false}>
      <Hero />
    </PageContainer>
  );
};

export default Home;