import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import activities from '../../data/activities';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';
import Separator from '../../components/Separator/Separator';

function WeeklyMeetups() {
  const activity1 = activities[0][0];
  const activity2 = activities[0][1];

  return (
    <Page>
      <Wrapper>
        <ActivityDetails
          variant={activity1.color}
          activity={activity1}
          direction='default'
        />
        <Separator />
        <ActivityDetails
          variant={activity2.color}
          activity={activity2}
          direction='inverted'
        />
      </Wrapper>
    </Page>
  );
}

export default WeeklyMeetups;
