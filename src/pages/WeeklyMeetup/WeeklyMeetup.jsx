import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './WeeklyMeetup.module.scss';
import activities from '../../data/activities';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

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
                <h4>{activity.when}</h4>
              </div>
              <div className={classes['activityPage_content-location']}>
                <FiMapPin size={20} />
                <h4>{activity.location}</h4>
              </div>
              <p>{activity.description}</p>
            </div>
          </div>
          <h2 className={classes['activityPage_separator']}>Next events</h2>
          <div className={classes['activityPage_events']}>
            <div className={classes['activityPage_events-item']}>
              4 <span>Jan</span>
            </div>
            <div className={classes['activityPage_events-item']}>
              11 <span>Jan</span>
            </div>
            <div className={classes['activityPage_events-item']}>
              18 <span>Jan</span>
            </div>
            <div className={classes['activityPage_events-item']}>
              25 <span>Jan</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </Page>
  );
}

export default WeeklyMeetup;
