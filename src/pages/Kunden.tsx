import { useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import OverviewKunden from "../components/portfolio-kunden/OverviewKunden";
import goBackButton from "../components/layout/goBackButton";

const Kunden = () => {
  const { title } = useParams<{ title: string }>(); // ID aus der URL abrufen

  return (
    <PageContainer>
    <div className="container mx-auto px-4 py-8">
    {goBackButton()}
        <OverviewKunden title={title || "Unbekannter Kunde"} />
        
    </div>
    </PageContainer>
  );
};

export default Kunden;
