import PageContainer from '../components/layout/PageContainer';
import PortfolioCompanyList from '../components/portfolio/PortfolioCompanyList.tsx';
import PortfolioGallery from '../components/portfolio/PortfolioGallery.tsx';
import PagePortfolio from '../components/portfolio/PortfolioList.tsx';

const Portfolio = () => {
  return (
    <PageContainer>
      <PagePortfolio/>
      <PortfolioCompanyList/>
      <PortfolioGallery/>
    </PageContainer>
  );
};

export default Portfolio;