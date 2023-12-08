import { Wrapper } from '../Wrapper/Wrapper';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiMail } from 'react-icons/fi';

export function Footer() {
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
                every Thursday 10am-12pm at the Heath Community Centre,
                Uttoxeter.
              </p>
            </div>
            <div className={classes['footerMain__columns']}>
              <div className={classes['footerMain__column']}>
                <h3>Quick links</h3>
                <ul>
                  <li>
                    <Link to='/weekly-meetup'>Weekly Meetup</Link>
                  </li>
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
                    <Link to='/contact-us'>Contact Us</Link>
                  </li>
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
              Copyright © <span>Helping Each Other</span> all right reserved.
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
