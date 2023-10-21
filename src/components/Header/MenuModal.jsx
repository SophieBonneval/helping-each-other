import Button from '../Button/Button';
import classes from './Header.module.scss';
import classnames from 'classnames';
import logo from '../../assets/logo.png';

export function MenuModal({ className, onClose }) {
  return (
    <div className={classnames(classes['modal'], className)}>
      <div className={classes['modalContainer']}>
        <div className={classes['modalHeader']}>
          <img
            className={classes['header-main__content-img']}
            alt='Logo Helping Each Other Uttoxeter'
            src={logo}
          ></img>
          <div>Menu</div>
          <Button variant='reset' onClick={onClose}>
            Close
          </Button>
        </div>
        <div className={classes['modalContent']}>
          <ul>
            <li>About us</li>
            <li>Book Club</li>
            <li>Garden Club</li>
          </ul>
        </div>
      </div>
      <div className={classes['modalOverlay']} onClick={onClose}></div>
    </div>
  );
}

export default MenuModal;
