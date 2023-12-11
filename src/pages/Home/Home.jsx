import { Link } from 'react-router-dom';
import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './Home.module.scss';
import {
  PiLeafDuotone,
  PiBooksDuotone,
  PiCoffeeDuotone,
  PiDropDuotone,
} from 'react-icons/pi';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  const activities = [
    {
      title: 'Weekly Meetup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, elit eget dignissim consequat, nisi ipsum luctus sapien, a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante commodo ultricies. Sed at magna consequat, aliquam neque vitae, tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl justo aliquam elit, sed aliquam justo leo quis.',
      link: '/weekly-meetup',
      icon: <PiCoffeeDuotone size={60} />,
    },
    {
      title: 'Book Club',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, elit eget dignissim consequat, nisi ipsum luctus sapien, a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante commodo ultricies. Sed at magna consequat, aliquam neque vitae, tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl justo aliquam elit, sed aliquam justo leo quis.',
      link: '/weekly-meetup',
      icon: <PiBooksDuotone size={60} />,
    },
    {
      title: 'Garden Club',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, elit eget dignissim consequat, nisi ipsum luctus sapien, a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante commodo ultricies. Sed at magna consequat, aliquam neque vitae, tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl justo aliquam elit, sed aliquam justo leo quis.',
      link: '/garden-club',
      icon: <PiLeafDuotone size={60} />,
    },
    {
      title: 'Swimming Club',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, elit eget dignissim consequat, nisi ipsum luctus sapien, a ultricies nisl elit vitae arcu. Donec vitae nisl sed ante commodo ultricies. Sed at magna consequat, aliquam neque vitae, tincidunt nisl. Sed euismod, nulla eu tincidunt vulputate, nisl justo aliquam elit, sed aliquam justo leo quis.',
      link: '/swimming-club',
      icon: <PiDropDuotone size={60} />,
    },
  ];

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
