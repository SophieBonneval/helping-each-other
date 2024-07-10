import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import activities from '../../data/activities';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';

function BookClub() {
  const activity = activities[1];

  return (
    <Page>
      <Wrapper>
        <ActivityDetails variant={activity.color} activity={activity} />
      </Wrapper>
    </Page>
  );
}

export default BookClub;
