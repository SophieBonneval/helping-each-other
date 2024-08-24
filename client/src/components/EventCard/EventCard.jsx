import classes from './EventCard.module.scss';
import classnames from 'classnames';
import { FiClock, FiArrowRight } from 'react-icons/fi';

function EventCard({ activity, activeDate }) {
  return (
    <div
      className={classnames(classes['activityDetails_events-itemDetails'], {
        [classes[activity.color]]: activity.color,
      })}
    >
      <div
        className={classes['activityDetails_events-itemDetails_img-container']}
      >
        <a
          href={activity.dates[activeDate].details.eventLocationUrl}
          target='blank'
        >
          <img src={activity.dates[activeDate].details.eventImgUrl} />
        </a>
      </div>
      <div className={classes['activityDetails_events-itemDetails_date']}></div>
      {activity.dates[activeDate].details.eventType && (
        <div className={classes['activityDetails_events-itemDetails_type']}>
          {activity.dates[activeDate].details.eventType}
        </div>
      )}
      <div className={classes['activityDetails_events-itemDetails_location']}>
        {activity.dates[activeDate].details.eventLocation}
      </div>
      {activity.dates[activeDate].details.eventDescription && (
        <div
          className={classes['activityDetails_events-itemDetails_description']}
        >
          {activity.dates[activeDate].details.eventDescription}
        </div>
      )}
      {(activity.dates[activeDate].details.eventTime ||
        activity.dates[activeDate].details.eventInfo) && (
        <div className={classes['activityDetails_events-itemDetails_bottom']}>
          <div
            className={
              classes['activityDetails_events-itemDetails_bottom-time']
            }
          >
            <FiClock size={20} />
            {activity.dates[activeDate].details.eventTime}
          </div>
          {activity.dates[activeDate].details.eventInfo && (
            <a
              href={activity.dates[activeDate].details.eventInfo}
              target='blank'
              className={
                classes['activityDetails_events-itemDetails_bottom-menu']
              }
            >
              See menu
              <FiArrowRight size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default EventCard;
