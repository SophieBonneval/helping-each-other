import classes from './ContactUsDetails.module.scss';
import { FiMail } from 'react-icons/fi';
import Separator from '../Separator/Separator';
import ContactForm from '../ContactForm/ContactForm';

export function ContactUsDetails() {
  return (
    <div className={classes['contactUsDetails']}>
      <div className={classes['contactUsDetails_email']}>
        <div className={classes['contactUsDetails_email_icon']}>
          <FiMail size={20} />
        </div>
        <div>
          <h3>Click to Email us</h3>
          <a href='mailto:helpingeachotheruttoxeter@gmail.com'>
            helpingeachotheruttoxeter@gmail.com
          </a>
        </div>
      </div>
      <Separator text='Or' />
      <ContactForm />
    </div>
  );
}
