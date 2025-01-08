import Hero from '../components/home/Hero';
import PageContainer from '../components/layout/PageContainer';
import PortfolioCompanyList from '../components/portfolio/PortfolioCompanyList';
import CardOverviewAnimation from '../components/services/CardOverviewAnimation';

const Home = () => {
  return (
    <PageContainer showBreadcrumbs={false}>
      <Hero />
      <PortfolioCompanyList />
      <CardOverviewAnimation />
    </PageContainer>
  );
};

export default Home;