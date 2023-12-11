import {
  PiLeafDuotone,
  PiBooksDuotone,
  PiCoffeeDuotone,
  PiDropDuotone,
} from 'react-icons/pi';

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

export default activities;
