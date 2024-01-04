import classes from './Separator.module.scss';
import classnames from 'classnames';

export default function Separator({ text, color = 'orange' }) {
  return (
    <h2
      className={classnames(classes['separator'], {
        [classes[color]]: color,
      })}
    >
      {text}
    </h2>
  );
}
