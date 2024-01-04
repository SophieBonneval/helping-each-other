import Button from '../Button/Button';
import classes from './Header.module.scss';
import classnames from 'classnames';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import navItems from '../../data/navItems';

export function MenuModal({ className, onClose }) {
  return (
    <div className={classnames(classes['modal'], className)}>
      <div className={classes['modalContainer']}>
        <div className={classes['modalHeader']}>
          <Link to='/'>
            <img
              className={classes['headerMain__contentImg']}
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
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link to={navItem.link}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes['modalOverlay']} onClick={onClose}></div>
    </div>
  );
}

export default MenuModal;
