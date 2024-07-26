import classes from './Separator.module.scss';
import classnames from 'classnames';

function Separator({ text, color = 'orange', id }) {
  if (!text)
    return (
      <div
        className={classnames(classes['separator'], {
          [classes[color]]: color,
        })}
        id={id}
      ></div>
    );
  return (
    <h2
      className={classnames(classes['separatorWithText'], {
        [classes[color]]: color,
      })}
      id={id}
    >
      {text}
    </h2>
  );
}

export default Separator;
