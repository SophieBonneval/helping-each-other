import { Link } from 'react-router-dom';
import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './Home.module.scss';
import classnames from 'classnames';
import { FiArrowRight } from 'react-icons/fi';
import activities from '../../data/activities';
import { useMemo } from 'react';

function Home() {
  const activitiesFlat = useMemo(() => {
    return activities.flat();
  }, []);

  // Find the indexes of the activities that need a hash in the link (to scroll to it on the activity page)
  const haveHashes = useMemo(() => {
    const haveHashes = [];
    let previousColor = '';

    activitiesFlat.forEach((activity, index) => {
      const currentColor = activity.color;
      if (previousColor === currentColor) {
        haveHashes.push(index);
      }
      previousColor = currentColor;
    });

    return haveHashes;
  }, [activitiesFlat]);

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
          {activitiesFlat.map((activity, index) => {
            const slug = activity.title.toLowerCase().replace(/ /g, '-');
            const hasHash = haveHashes.includes(index);

            return (
              <div
                key={index}
                className={classnames(classes['homepage__activities-item'], {
                  [classes[activity.color]]: activity.color,
                })}
              >
                <div className={classes['homepage__activities-item__icon']}>
                  {activity.icon}
                </div>
                <h2>{activity.title}</h2>
                <p>{activity.description}</p>
                <Link to={`${activity.link}#${hasHash ? slug : ''}`}>
                  Read more <FiArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
        <div className={classes['homepage__activities-more']}>
          Check out our
          <a
            href='https://www.facebook.com/helpingeachotheruttoxeter'
            target='blank'
          >
            Facebook page
          </a>
          for more updates!
        </div>
      </Wrapper>
    </Page>
  );
}

export default Home;
