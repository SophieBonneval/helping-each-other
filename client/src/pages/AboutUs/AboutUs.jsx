import AboutUsDetails from '../../components/AboutUsDetails/AboutUsDetails';
import Page from '../../components/Page/Page';
import team from '../../data/team';
import Wrapper from '../../components/Wrapper/Wrapper';

function AboutUs() {
  return (
    <Page>
      <Wrapper>
        <AboutUsDetails title='About Us' team={team} />
      </Wrapper>
    </Page>
  );
}

export default AboutUs;
