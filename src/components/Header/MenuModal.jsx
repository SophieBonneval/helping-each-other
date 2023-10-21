import Button from '../Button/Button';
import classes from './Header.module.scss';
import classnames from 'classnames';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export function MenuModal({ className, onClose }) {
  return (
    <div className={classnames(classes['modal'], className)}>
      <div className={classes['modalContainer']}>
        <div className={classes['modalHeader']}>
          <Link to='/'>
            <img
              className={classes['header-main__content-img']}
              alt='Logo Helping Each Other Uttoxeter'
              src={logo}
            ></img>
          </Link>
          <div>Menu</div>
          <Button variant='reset' onClick={onClose}>
            Close
          </Button>
        </div>
        <div className={classes['modalContent']}>
          <ul>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/book-club'>Book Club</Link>
            </li>
            <li>
              <Link to='/garden-club'>Garden Club</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes['modalOverlay']} onClick={onClose}></div>
    </div>
  );
}

export default MenuModal;
