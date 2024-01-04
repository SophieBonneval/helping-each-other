import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import activities from '../../data/activities';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';

function SwimmingClub() {
  const activity = activities[3];

  return (
    <Page>
      <Wrapper>
        <ActivityDetails variant='blue' activity={activity} />
      </Wrapper>
    </Page>
  );
}

export default SwimmingClub;
