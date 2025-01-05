import PageContainer from '../components/layout/PageContainer';
import PortfolioCompanyList from '../components/portfolio/PortfolioCompanyList.tsx';
import PagePortfolio from '../components/portfolio/PortfolioList.tsx';

const Portfolio = () => {
  return (
    <PageContainer>
      <PagePortfolio/>
      <PortfolioCompanyList/>
    </PageContainer>
  );
};

export default Portfolio;