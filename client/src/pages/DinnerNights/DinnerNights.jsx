import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import activities from '../../data/activities';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';

function DinnerNights() {
  const activity = activities[4];

  return (
    <Page>
      <Wrapper>
        <ActivityDetails
          variant={activity.color}
          activity={activity}
          datesHaveDetails={true}
        />
      </Wrapper>
    </Page>
  );
}

export default DinnerNights;
