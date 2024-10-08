import {
  PiLeafDuotone,
  PiBooksDuotone,
  PiCoffeeDuotone,
  PiDropDuotone,
  PiHamburgerDuotone,
} from 'react-icons/pi';
import date1Image from '../assets/events/date1.jpg';
import date2Image from '../assets/events/date2.jpg';
import {
  getNextWeekDays,
  getNextSecondDayOfMonth,
} from '../tools/GetNextDates';

const activities = [
  [
    {
      color: 'yellow',
      title: 'Places of Welcome',
      when: 'Every Thursday 10am-12pm',
      location: 'Uttoxeter Leisure Centre',
      description:
        'Our weekly meetup is in partnership with Places of Welcome. This is a group to meet new people and have a friendly chat with a free cup of tea or coffee. It is held at 10 am to 12 pm every Thursday at Uttoxeter Leisure Centre. Everyone is welcome to come along and join us (including children of those attending).',
      link: '/weekly-meetups',
      icon: <PiCoffeeDuotone size={60} />,
      dates: getNextWeekDays('Thursday', 4).map((date) => {
        return {
          day: date.getDate(),
          month: date.toLocaleString('default', { month: 'short' }),
          year: date.getFullYear(),
        };
      }),
    },
    {
      color: 'yellow',
      title: 'Lowes Group',
      when: 'Every Wednesday 10am-12pm',
      location: 'Lowes - 44 Carter Street, Uttoxeter',
      description:
        'Our weekly meetup is in partnership with Lowes. This is a group to meet new people and have a friendly chat with a free cup of tea or coffee. It is held at 10 am to 12 pm every Wednesday at Lowes. Everyone is welcome to come along and join us (including children under 2 of those attending). Everything said during the group is completely confidential.',
      link: '/weekly-meetups',
      icon: <PiCoffeeDuotone size={60} />,
      dates: getNextWeekDays('Wednesday', 4).map((date) => {
        return {
          day: date.getDate(),
          month: date.toLocaleString('default', { month: 'short' }),
          year: date.getFullYear(),
        };
      }),
    },
  ],
  {
    color: 'orange',
    title: 'Book Club',
    when: '2nd Monday of the month at 10:30am',
    location: 'Uttoxeter Library',
    description:
      'The book club is on the 2nd Monday of the month at Uttoxeter Library at 10:30. We read a wide range of different authors and genres. We are a very relaxed book club that anyone is welcome to join at any point. There are always spare books at the library for anyone who wishes to join us.',
    link: '/book-club',
    icon: <PiBooksDuotone size={60} />,
    dates: getNextSecondDayOfMonth('Monday', 4).map((date) => {
      return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        year: date.getFullYear(),
      };
    }),
  },
  {
    color: 'green',
    title: 'Garden Club',
    when: 'Every other Saturday at 10am (except in Winter)',
    location: 'The Heath Community Centre',
    description:
      'We have 2 plots at the Uttoxeter Community Garden, which is attached to The Heath Community Centre. Everyone is welcome to attend and help out with maintaining the plots and adding flowers, fruits, or vegetables. We meet frequently throughout spring, summer, and autumn.',
    link: '/garden-club',
    icon: <PiLeafDuotone size={60} />,
    dates: [
      {
        day: '31',
        month: 'Aug',
        year: '2024',
      },
      {
        day: '07',
        month: 'Sept',
        year: '2024',
      },
      {
        day: '21',
        month: 'Sept',
        year: '2024',
      },
      {
        day: '05',
        month: 'Oct',
        year: '2024',
      },
    ],
  },
  {
    color: 'blue',
    title: 'Swimming Club',
    when: 'Every Monday 10am',
    location: 'Uttoxeter Leisure Centre',
    description:
      'Swimming is on every Monday (excluding every 2nd Monday) at Uttoxeter Leisure Centre at 10am. You will have to sign up to Everyone active and pre book. If you are on means tested benefits or over the age of 67, you are entitled to a reduced rate of swimming. You will need to take proof of entitlement to the desk at Uttoxeter Leisure Centre.',
    link: '/swimming-club',
    icon: <PiDropDuotone size={60} />,
    dates: [
      {
        day: '02',
        month: 'Sept',
        year: '2024',
      },
      {
        day: '16',
        month: 'Sept',
        year: '2024',
      },
      {
        day: '23',
        month: 'Sept',
        year: '2024',
      },
      {
        day: '30',
        month: 'Sept',
        year: '2024',
      },
    ],
  },
  {
    color: 'purple',
    title: 'Dinner Nights',
    // when: '1st Friday of the month at 18:00pm',
    // location: 'TBA',
    description:
      "We gather once a month to enjoy an evening meal and / or activity together. Anyone who attends Helping Each Other meetup groups or clubs is welcome. The website will be updated monthly with the new venue and date based on our members' recommendations. Helping Each Other is not founding the cost of meals and activities at the moment. Please get in touch if you would like to attend because we need to book in advance.",
    link: '/dinner-nights',
    icon: <PiHamburgerDuotone size={60} />,
    dates: [
      {
        day: '06',
        month: 'Sept',
        year: '2024',
        details: {
          eventType: 'Bowling',
          eventLocation: 'Cinebowl',
          eventTime: '18:00',
          eventDescription:
            "Come have fun with us at the Cinebowl, with its 8 lanes of ten pin bowling with glow lighting. With or without food, it's a great way to socialise!",
          eventImgUrl: date1Image,
          eventLocationUrl: 'https://www.cinebowl.co.uk/bowling',
          eventInfo:
            'https://cinebowl-uttoxeter.square.site/s/order?location=11ee6c0c8d70206d964c3cecef6dbab4&seat_select=true#most-popular',
        },
      },
      {
        day: '11',
        month: 'Oct',
        year: '2024',
        details: {
          eventType: 'Pub & Restaurant',
          eventLocation: 'The Red Lion',
          eventTime: '18:00',
          eventDescription:
            "A welcoming and friendly three room traditional drinker's pub. Main bar has flagged floor and wooden panelling, There is a comfortable snug.",
          eventImgUrl: date2Image,
          eventLocationUrl: 'https://www.facebook.com/RocesterGeorgeLisa',
          eventInfo: 'https://restaurantguru.com/Red-Lion-Uttoxeter/menu',
        },
      },
      {
        day: '01',
        month: 'Nov',
        year: '2024',
        details: {
          eventLocation: 'TBA',
        },
      },
    ],
  },
];

export default activities;
