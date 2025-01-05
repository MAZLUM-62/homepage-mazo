import PageContainer from '../components/layout/PageContainer';
import TeamList from '../components/ueber-uns/team-list';
import UeberUns from '../components/ueber-uns/ueber-team';

const About = () => {
  return (
    <PageContainer>
      
      <UeberUns/>
      <TeamList/>
    </PageContainer>
  );
};

export default About;