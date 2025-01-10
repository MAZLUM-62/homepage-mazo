// src/components/PortfolioCompanyList.jsx
const companies = [
    { name: 'Company 1', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/nodejs-icon-512x512-vl7ew1eg.png' },
    { name: 'Company 1', logo: 'https://static-00.iconduck.com/assets.00/flutter-icon-413x512-4picx6vy.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/file-type-html-icon-226x256-lud8fl1p.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/file-type-css-icon-226x256-ytqdyr76.png' },
    { name: 'Company 1', logo: 'https://static-00.iconduck.com/assets.00/wordpress-icon-256x256-1fsw4nlq.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/shopify-icon-225x256-zyhprtyw.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/wix-icon-256x256-525d6wgi.png' },
    { name: 'Company 1', logo: 'https://static-00.iconduck.com/assets.00/magento-icon-217x256-kmgmqlwa.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-256x256-2o2kq55k.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/python-icon-256x254-m7n72ce3.png' },
    { name: 'Company 1', logo: 'https://static-00.iconduck.com/assets.00/postgresql-icon-248x256-vp8m9bqw.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/mysql-icon-256x251-c6f8bihu.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/mongodb-icon-256x256-nc3cxgbo.png' },
    { name: 'Company 1', logo: 'https://static-00.iconduck.com/assets.00/aws-icon-256x256-qvoq2ml5.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/github-icon-256x249-7imgj54m.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/figma-icon-171x256-cm2xsty6.png' },
    { name: 'Company 1', logo: 'https://static-00.iconduck.com/assets.00/visual-studio-code-icon-256x255-hciehfs3.png' },
    { name: 'Company 2', logo: 'https://static-00.iconduck.com/assets.00/docker-icon-256x220-42ehxqv2.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-245x256-ygo9prh5.png' },
    { name: 'Company 3', logo: 'https://static-00.iconduck.com/assets.00/letters-ai-artificial-intelligence-icon-256x256-ovp4xbci.png' },
];

const PortfolioCompanyList = () => {
    return (
        <div className="bg-bg-primary py-8">
            <div className="max-w-4xl mx-auto "> 
                <div className="overflow-hidden">
                    <div className="flex animate-marquee ">
                        {/* Erste Reihe von Logos */}
                        <div className="flex space-x-12">
                            {companies.map((company, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <img src={company.logo} alt={company.name} className="h-12" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCompanyList;
