import classes from './Wrapper.module.scss';

export function Wrapper({ children }) {
  return <div className={classes['container']}>{children}</div>;
}

export default Wrapper;
