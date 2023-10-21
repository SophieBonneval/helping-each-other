import { Wrapper } from '../Wrapper/Wrapper';
import classes from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/logo.png';
import useScreenSize from '../../hooks/useScreenSize';
import { useState } from 'react';
import MenuModal from './MenuModal';
import classnames from 'classnames';

export function Header() {
  const palmStart = 600;
  const windowWidth = useScreenSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className={classes['header-main__container']}>
        <Wrapper>
          <div className={classes['header-main__content']}>
            <img
              className={classes['header-main__content-img']}
              alt='Logo Helping Each Other Uttoxeter'
              src={logo}
            ></img>
            {windowWidth > palmStart ? (
              <>
                <ul className={classes['header-main__content-menuItems']}>
                  <li>About Us</li>
                  <li>Book Club</li>
                  <li>Garden Club</li>
                </ul>
                <Button>Contact us</Button>
              </>
            ) : (
              <>
                <Button
                  variant='reset'
                  className={classes['header__mobile-menu-btn']}
                  onClick={() => {
                    setIsMobileMenuOpen(true);
                  }}
                >
                  Menu
                </Button>
                <MenuModal
                  className={classnames({
                    [classes['visible']]: isMobileMenuOpen,
                  })}
                  isMobileMenuOpen={isMobileMenuOpen}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              </>
            )}
          </div>
        </Wrapper>
      </div>
    </header>
  );
}

export default Header;
