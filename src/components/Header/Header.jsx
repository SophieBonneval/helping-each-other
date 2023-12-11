import { Wrapper } from '../Wrapper/Wrapper';
import classes from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/logo.png';
import useScreenSize from '../../hooks/useScreenSize';
import { useState } from 'react';
import MenuModal from './MenuModal';
import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

export function Header() {
  const lapStart = 750;
  const windowWidth = useScreenSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header>
      <div className={classes['headerMain__container']}>
        <Wrapper>
          <div className={classes['headerMain__content']}>
            <Link to='/'>
              <img
                className={classes['headerMain__contentImg']}
                alt='Logo Helping Each Other Uttoxeter'
                src={logo}
              ></img>
            </Link>
            {windowWidth > lapStart ? (
              <>
                <nav className={classes['headerMain__content-menuItems']}>
                  <ul>
                    <li>
                      <Link
                        className={
                          location.pathname === '/weekly-meetup'
                            ? classes.active
                            : ''
                        }
                        to='/weekly-meetup'
                      >
                        Weekly Meetup
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === '/book-club'
                            ? classes.active
                            : ''
                        }
                        to='/book-club'
                      >
                        Book Club
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === '/garden-club'
                            ? classes.active
                            : ''
                        }
                        to='/garden-club'
                      >
                        Garden Club
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === '/swimming-club'
                            ? classes.active
                            : ''
                        }
                        to='/swimming-club'
                      >
                        Swimming Club
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === '/events' ? classes.active : ''
                        }
                        to='/events'
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          location.pathname === '/about-us'
                            ? classes.active
                            : ''
                        }
                        to='/about-us'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Link to='/contact-us'>
                  <Button>Contact Us</Button>
                </Link>
              </>
            ) : (
              <>
                <Button
                  variant='reset'
                  className={classes['headerMobile__menuBtn']}
                  onClick={() => {
                    setIsMobileMenuOpen(true);
                  }}
                >
                  <FiMenu size={30} />
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
