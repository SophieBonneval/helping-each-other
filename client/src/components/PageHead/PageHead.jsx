import classes from './PageHead.module.scss';
import classnames from 'classnames';

function PageHead({ variant, subtitle, title, activity, colour = 'orange' }) {
  if (variant === 'default') {
    return (
      <div className={classes['pageHead__default']}>
        <h1>{title}</h1>
      </div>
    );
  } else if (variant === 'activity') {
    return (
      <div
        className={classnames(classes['pageHead__activity'], {
          [classes[colour]]: colour,
        })}
      >
        {activity.icon}
        <h1>{activity.title}</h1>
      </div>
    );
  } else if (variant === 'block') {
    return (
      <div className={classes['pageHead__block']}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  }
}

export default PageHead;
