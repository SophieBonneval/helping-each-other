import Page from '../../components/Page/Page';
import Wrapper from '../../components/Wrapper/Wrapper';
import { PageHead } from '../../components/PageHead/PageHead';
import { ContactUsDetails } from '../../components/ContactUsDetails/ContactUsDetails';

function ContactUs() {
  return (
    <Page rawmain={true}>
      <PageHead
        variant='block'
        title='Contact Us'
        subtitle="We'd love to hear from you!"
      />
      <Wrapper>
        <ContactUsDetails />
      </Wrapper>
    </Page>
  );
}

export default ContactUs;
