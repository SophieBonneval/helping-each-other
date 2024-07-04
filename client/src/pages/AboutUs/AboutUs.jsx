import Page from '../../components/Page/Page';
import { PageHead } from '../../components/PageHead/PageHead';
import Wrapper from '../../components/Wrapper/Wrapper';

function AboutUs() {
  return (
    <Page>
      <Wrapper>
        <PageHead variant='default' title='About Us' />
        <p>
          Helping Each Other was set up in September 2019 by our founder Jasmine
          Short and two other people (they are no longer involved, but helped
          tremendously to get our organisation off the ground). The purpose of
          our organisation was to fill a gap in mental health services in
          Uttoxeter. We wanted our organisation to be ran from the bottom up
          with service users making the decisions.
        </p>
        <p>
          Shortly after starting our organisation, Covid-19 happened and we had
          to move all our services online with weekly video calls, which kept
          everyone ticking until we could meet in person again.
        </p>
        <p>
          Over the years we have had a lot of support with funding, especially
          from Heath Big Local and the Knights 4 Uttoxeter.
        </p>
        <p>
          Now most of our activities are open to everyone regardless of their
          mental health. We offer a range of groups and activities which anyone
          over 18 can access. We have a group in partnership with Places of
          Welcome which anyone can attend regardless of their age.
        </p>
      </Wrapper>
    </Page>
  );
}

export default AboutUs;
