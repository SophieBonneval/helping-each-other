import Button from '../Button/Button';
import classes from './Header.module.scss';
import classnames from 'classnames';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

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
            <FiX size={30} />
          </Button>
        </div>
        <div className={classes['modalContent']}>
          <ul>
            <li>
              <Link to='/book-club'>Book Club</Link>
            </li>
            <li>
              <Link to='/garden-club'>Garden Club</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/about-us'>About us</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes['modalOverlay']} onClick={onClose}></div>
    </div>
  );
}

export default MenuModal;
