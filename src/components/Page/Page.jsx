import classes from './Page.module.scss';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Page({ children }) {
  return (
    <div className={classes['container']}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Page;
