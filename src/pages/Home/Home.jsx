import { Link } from 'react-router-dom';
import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './Home.module.scss';
import { PiLeafDuotone, PiBooksDuotone, PiCoffeeDuotone } from 'react-icons/pi';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  return (
    <Page>
      <div className={classes['hompage__bannerImg']}>
        <Wrapper>
          <h1>Welcome to Helping Each Other Uttoxeter</h1>
        </Wrapper>
        <div className={classes['hompage__bannerOverlay']}></div>
      </div>
      <Wrapper classname={classes['homepage__activitiesContainer']}>
        <h1>Our activities</h1>
        <div className={classes['homepage__activities']}>
          <div className={classes['homepage__activities-item']}>
            <div className={classes['homepage__activities-item__icon']}>
              <PiCoffeeDuotone size={60} />
            </div>
            <h2>Weekly Meetup</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, elit eget dignissim consequat, nisi ipsum luctus sapien,
              a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante
              commodo ultricies. Sed at magna consequat, aliquam neque vitae,
              tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl
              justo aliquam elit, sed aliquam justo leo quis.
            </p>
            <Link to='/weekly-meetup'>
              Read more <FiArrowRight />
            </Link>
          </div>
          <div className={classes['homepage__activities-item']}>
            <div className={classes['homepage__activities-item__icon']}>
              <PiBooksDuotone size={60} />
            </div>
            <h2>Book Club</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, elit eget dignissim consequat, nisi ipsum luctus sapien,
              a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante
              commodo ultricies. Sed at magna consequat, aliquam neque vitae,
              tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl
              justo aliquam elit, sed aliquam justo leo quis.
            </p>
            <Link to='/book-club'>
              Read more <FiArrowRight />
            </Link>
          </div>
          <div className={classes['homepage__activities-item']}>
            <div className={classes['homepage__activities-item__icon']}>
              <PiLeafDuotone size={60} />
            </div>
            <h2>Garden Club</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, elit eget dignissim consequat, nisi ipsum luctus sapien,
              a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante
              commodo ultricies. Sed at magna consequat, aliquam neque vitae,
              tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl
              justo aliquam elit, sed aliquam justo leo quis.
            </p>
            <Link to='/garden-club'>
              Read more <FiArrowRight />
            </Link>
          </div>
        </div>
      </Wrapper>
    </Page>
  );
}

export default Home;
