// src/components/PortfolioCompanyList.jsx
const companies = [
    { name: 'Company 1', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 2', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 3', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 1', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 2', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 3', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 1', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 2', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 3', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 1', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 2', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 3', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 1', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 2', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
    { name: 'Company 3', logo: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png' },
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
