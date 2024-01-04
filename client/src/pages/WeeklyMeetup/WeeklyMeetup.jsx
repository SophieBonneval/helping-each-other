import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import activities from '../../data/activities';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';

function WeeklyMeetup() {
  const activity = activities[0];

  return (
    <Page>
      <Wrapper>
        <ActivityDetails variant='yellow' activity={activity} />
      </Wrapper>
    </Page>
  );
}

export default WeeklyMeetup;
