import classes from './PageHead.module.scss';

export function PageHead({ subtitle, title }) {
  return (
    <div className={classes['pageHead']}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
