import { Wrapper } from '../Wrapper/Wrapper';
import classes from './Footer.module.scss';

export function Footer() {
  return (
    <footer>
      <div className={classes['footer-main__container']}>
        <Wrapper>
          <div className={classes['footer-main__content']}>
            <div className={classes['footer-main__about']}>
              <h3>Helping Each Other Uttoxeter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={classes['footer-main__columns']}>
              <div className={classes['footer-main__column']}>
                <h3>Quick links</h3>
                <ul>
                  <li>About Us</li>
                  <li>Book Club</li>
                  <li>Garden Club</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className={classes['footer-main__column']}>
                <h3>Contact Info</h3>
                <p>000</p>
                <p>example@email.com</p>
                <div>Facebook etc</div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={classes['footer-copyright__container']}>
        <Wrapper>
          <div className={classes['footer-copyright__content']}>
            <p>
              Copyright © <span>Helping Each Other</span> 2023
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
