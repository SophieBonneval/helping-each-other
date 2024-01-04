import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import activities from '../../data/activities';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';

function GardenClub() {
  const activity = activities[2];

  return (
    <Page>
      <Wrapper>
        <ActivityDetails variant='green' activity={activity} />
      </Wrapper>
    </Page>
  );
}

export default GardenClub;
