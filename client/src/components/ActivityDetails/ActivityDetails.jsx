import classnames from 'classnames';
import classes from './ActivityDetails.module.scss';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import Separator from '../Separator/Separator';
import { PageHead } from '../PageHead/PageHead';

export function ActivityDetails({ variant, activity }) {
  return (
    <div
      className={classnames(classes['activityDetails'], {
        [classes[variant]]: variant,
      })}
    >
      <PageHead variant='activity' activity={activity} colour={variant} />
      <div className={classes['activityDetails_content']}>
        <div className={classes['activityDetails_content-img']}></div>
        <div>
          {activity.when && (
            <div className={classes['activityDetails_content-date']}>
              <FiCalendar size={20} />
              <h4>{activity.when}</h4>
            </div>
          )}
          {activity.location && (
            <div className={classes['activityDetails_content-location']}>
              <FiMapPin size={20} />
              <h4>{activity.location}</h4>
            </div>
          )}
          <p>{activity.description}</p>
        </div>
      </div>
      {activity.dates && activity.dates.length > 1 && (
        <>
          <Separator text='Next events' color={variant} />
          <div className={classes['activityDetails_events']}>
            {activity.dates.map((date, index) => (
              <div
                key={index}
                className={classes['activityDetails_events-item']}
              >
                {date.day} <span>{date.month}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ActivityDetails;
