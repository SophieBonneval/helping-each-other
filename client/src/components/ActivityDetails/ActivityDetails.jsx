import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import classes from './ActivityDetails.module.scss';
import Separator from '../Separator/Separator';
import EventCard from '../EventCard/EventCard';
import PageHead from '../PageHead/PageHead';
import { FiCalendar, FiMapPin, FiArrowDown } from 'react-icons/fi';
import { BiSolidDownArrow } from 'react-icons/bi';

function ActivityDetails({
  variant,
  activity,
  direction = 'default',
  datesHaveDetails = false,
}) {
  const [activeDate, setActiveDate] = useState(datesHaveDetails ? 0 : -1);

  const handleDate = (index) => setActiveDate(index);

  const activitySlug = activity.title.toLowerCase().replace(/ /g, '-');
  const activityLocation = useLocation();

  // Scroll to activity on the page if it has a hash
  useEffect(() => {
    if (activityLocation.hash) {
      const id = activityLocation.hash.slice(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behaviour: 'smooth' });
      }
    }
  });

  return (
    <div
      className={classnames(classes['activityDetails'], {
        [classes[variant]]: variant,
      })}
      id={activitySlug}
    >
      <PageHead variant='activity' activity={activity} colour={variant} />
      <div
        className={classnames(classes['activityDetails_content'], {
          [classes[direction]]: direction,
        })}
      >
        <div className={classes['activityDetails_content-img']}></div>
        <div
          className={classnames(
            classes['activityDetails_content-description'],
            {
              [classes['hasDetails']]: datesHaveDetails,
            }
          )}
        >
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
          {datesHaveDetails && (
            <a
              href='#events'
              className={classes['activityDetails_content-moreDetails']}
            >
              See dates below for more details
              <FiArrowDown size={20} />
            </a>
          )}
        </div>
      </div>
      {activity.dates && activity.dates.length > 1 && (
        <>
          <Separator text='Next events' color={variant} id='events' />
          <div className={classes['activityDetails_events']}>
            {activity.dates.map((date, index) => (
              <div
                key={index}
                className={classnames(classes['activityDetails_events-item'], {
                  [classes['active']]: index === activeDate,
                  [classes['hasDetails']]: datesHaveDetails,
                })}
                onClick={() => (datesHaveDetails ? handleDate(index) : null)}
              >
                {date.day} <span>{date.month}</span>
                {datesHaveDetails && <BiSolidDownArrow size={20} />}
              </div>
            ))}
          </div>
          {datesHaveDetails && (
            <EventCard activity={activity} activeDate={activeDate} />
          )}
        </>
      )}
    </div>
  );
}

export default ActivityDetails;
