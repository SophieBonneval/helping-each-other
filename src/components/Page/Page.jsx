import classes from './Page.module.scss';
import { Footer } from '../Footer/Footer';

export function Page({ children }) {
  return (
    <div className={classes['container']}>
      <header>Header</header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Page;
