import {
  PiLeafDuotone,
  PiBooksDuotone,
  PiCoffeeDuotone,
  PiDropDuotone,
} from 'react-icons/pi';

const activities = [
  {
    title: 'Weekly Meetup',
    when: 'Every Thursday 10am-12pm',
    location: 'Uttoxeter Leisure Centre',
    description:
      'Our weekly meetup is in partnership with Places of Welcome. This is a group to meet new people and have a friendly chat with a free cup of tea or coffee. It is held at 10 am to 12 pm every Thursday at Uttoxeter Leisure Centre. Everyone is welcome to come along and join us (including children of those attending).',
    link: '/weekly-meetup',
    icon: <PiCoffeeDuotone size={60} />,
    dates: [
      {
        day: '4',
        month: 'Jan',
        year: '2024',
      },
      {
        day: '11',
        month: 'Jan',
        year: '2024',
      },
      {
        day: '18',
        month: 'Jan',
        year: '2024',
      },
      {
        day: '25',
        month: 'Jan',
        year: '2024',
      },
    ],
  },
  {
    title: 'Book Club',
    description:
      'The book club is on the 2nd Monday of the month at Uttoxeter Library at 10:30. We read a wide range of different authors and genres. We are a very relaxed book club that anyone is welcome to join at any point. There are always spare books at the library for anyone who wishes to join us.',
    link: '/weekly-meetup',
    icon: <PiBooksDuotone size={60} />,
  },
  {
    title: 'Garden Club',
    description:
      'We have 2 plots at the Uttoxeter Community Garden, which is attached to The Heath Community Centre. Everyone is welcome to attend and help out with maintaining the plots and adding flowers, fruits, or vegetables. We meet frequently throughout spring, summer, and autumn.',
    link: '/garden-club',
    icon: <PiLeafDuotone size={60} />,
  },
  {
    title: 'Swimming Club',
    description:
      'Swimming is on every Monday (excluding every 2nd Monday) at Uttoxeter Leisure Centre at 10 am. You will have to sign up to Everyone active and pre book. If you are on means tested benefits or over the age of 67, you are entitled to a reduced rate of swimming. You will need to take proof of entitlement to the desk at Uttoxeter Leisure Centre.',
    link: '/swimming-club',
    icon: <PiDropDuotone size={60} />,
  },
];

export default activities;
