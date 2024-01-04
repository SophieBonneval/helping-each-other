import classes from './Page.module.scss';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import classNames from 'classnames';

export function Page({ rawmain, children }) {
  return (
    <div className={classes['page']}>
      <Header />
      <main
        className={classNames({
          [classes['raw']]: rawmain,
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;
