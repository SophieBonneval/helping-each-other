import { Wrapper } from '../Wrapper/Wrapper';
import classes from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/logo.png';
import useScreenSize from '../../hooks/useScreenSize';
import { useState } from 'react';
import MenuModal from './MenuModal';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

export function Header() {
  const lapStart = 750;
  const windowWidth = useScreenSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  <div>
                    <Link to='/weekly-meetup'>Weekly Meetup</Link>
                  </div>
                  <div>
                    <Link to='/book-club'>Book Club</Link>
                  </div>
                  <div>
                    <Link to='/garden-club'>Garden Club</Link>
                  </div>
                  <div>
                    <Link to='/events'>Events</Link>
                  </div>
                  <div>
                    <Link to='/about-us'>About Us</Link>
                  </div>
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
