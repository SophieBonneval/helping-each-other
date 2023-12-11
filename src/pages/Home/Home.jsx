import { Link } from 'react-router-dom';
import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './Home.module.scss';
import { FiArrowRight } from 'react-icons/fi';
import activities from '../../data/activities';

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
          {activities.map((activity, index) => (
            <div key={index} className={classes['homepage__activities-item']}>
              <div className={classes['homepage__activities-item__icon']}>
                {activity.icon}
              </div>
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
              <Link to={activity.link}>
                Read more <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
    </Page>
  );
}

export default Home;
