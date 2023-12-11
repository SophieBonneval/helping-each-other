import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './WeeklyMeetup.module.scss';
import activities from '../../data/activities';
import { FiCalendar } from 'react-icons/fi';

function WeeklyMeetup() {
  const activity = activities[0];

  return (
    <Page>
      <Wrapper>
        <div className={classes['activityPage']}>
          <div className={classes['activityPage_header']}>
            {activity.icon}
            <h1>{activity.title}</h1>
          </div>
          <div className={classes['activityPage_content']}>
            <div className={classes['activityPage_content-img']}></div>
            <div>
              <div className={classes['activityPage_content-date']}>
                <FiCalendar size={20} />
                <h4>Every Thursday 10am-12pm</h4>
              </div>
              <p>{activity.description}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </Page>
  );
}

export default WeeklyMeetup;
