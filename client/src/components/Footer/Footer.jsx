import Wrapper from '../Wrapper/Wrapper';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiMail } from 'react-icons/fi';
import navItems from '../../data/navItems';

function Footer() {
  return (
    <footer>
      <div className={classes['footerMain__container']}>
        <Wrapper>
          <div className={classes['footerMain__content']}>
            <div className={classes['footerMain__about']}>
              <h2>Helping Each Other Uttoxeter</h2>
              <p>
                A peer support group for anyone that has emotional or mental
                health difficulties. Come and join us for free tea and coffee
                every Thursday 10am-12pm at the Uttoxeter Leisure Centre.
              </p>
            </div>
            <div className={classes['footerMain__columns']}>
              <div className={classes['footerMain__column']}>
                <h3>Quick links</h3>
                <ul>
                  {navItems.map((quickLink, index) => (
                    <li key={index}>
                      <Link to={quickLink.link}>{quickLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes['footerMain__column']}>
                <h3>Contact Info</h3>
                <div className={classes['footerMain__column-Email']}>
                  <FiMail size={15} />
                  <a href='mailto:helpingeachotheruttoxeter@gmail.com'>
                    helpingeachotheruttoxeter@gmail.com
                  </a>
                </div>
                <ul className={classes['footerMain__column-socialMedias']}>
                  <li>
                    <a
                      href='https://www.facebook.com/helpingeachotheruttoxeter'
                      target='blank'
                    >
                      <FiFacebook size={25} />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/HEO_Uttoxeter' target='blank'>
                      <FiTwitter size={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={classes['footerCopyright__container']}>
        <Wrapper>
          <div className={classes['footerCopyright__content']}>
            <p>
              Copyright © <Link to='/'>Helping Each Other</Link> all right
              reserved.
            </p>
            <ul>
              <li>Legal link 1</li>
              <li>Legal link 2</li>
              <li>Legal link 3</li>
            </ul>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}

export default Footer;
