import classes from './Separator.module.scss';
import classnames from 'classnames';

export default function Separator({ text, color = 'orange' }) {
  if (!text)
    return (
      <div
        className={classnames(classes['separator'], {
          [classes[color]]: color,
        })}
      ></div>
    );
  return (
    <h2
      className={classnames(classes['separatorWithText'], {
        [classes[color]]: color,
      })}
    >
      {text}
    </h2>
  );
}
