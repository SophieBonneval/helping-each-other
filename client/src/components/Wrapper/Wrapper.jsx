import classnames from 'classnames';
import classes from './Wrapper.module.scss';

function Wrapper({ classname, children }) {
  return (
    <div
      className={classnames(classes['container'], {
        [classname]: classname,
      })}
    >
      {children}
    </div>
  );
}

export default Wrapper;
