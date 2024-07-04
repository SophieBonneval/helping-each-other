import classes from './ContactUsDetails.module.scss';
import { TbMailFilled } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa6';
import Separator from '../Separator/Separator';
// import ContactForm from '../ContactForm/ContactForm';

export function ContactUsDetails() {
  return (
    <div className={classes['contactUsDetails']}>
      <div className={classes['contactUsDetails_contactContainer']}>
        <div className={classes['contactUsDetails_contact']}>
          <div className={classes['contactUsDetails_contact_icon']}>
            <TbMailFilled size={20} />
          </div>
          <div>
            <h3>Email us</h3>
            <a href='mailto:helpingeachotheruttoxeter@gmail.com'>
              helpingeachotheruttoxeter@gmail.com
            </a>
          </div>
        </div>
        <Separator text='OR' />
        <div className={classes['contactUsDetails_contact']}>
          <div className={classes['contactUsDetails_contact_icon']}>
            <FaFacebookF size={20} />
          </div>
          <div>
            <h3>Message us</h3>
            <a href='https://www.facebook.com/helpingeachotheruttoxeter'>
              Helping Each Other - Facebook page
            </a>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}
