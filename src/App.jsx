import Page from './components/Page/Page';
import Button from './components/Button/Button';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes['container']}>
      <Page>
        <h1>Welcome to Helping Each Other Uttoxeter</h1>
        <Button ariaLabel={'Hello'} disabled={false}>
          Button 1
        </Button>
        <Button ariaLabel={'Hello2'} disabled={false} variant='secondary'>
          Button 2
        </Button>
      </Page>
    </div>
  );
}

export default App;
