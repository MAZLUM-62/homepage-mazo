import Hero from '../components/home/Hero';
import PageContainer from '../components/layout/PageContainer';
import FeaturedServices from '../components/services/OverviewServices';

const Home = () => {
  return (
    <PageContainer showBreadcrumbs={false}>
      <Hero />
      <FeaturedServices />
    </PageContainer>
  );
};

export default Home;