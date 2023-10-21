import Page from './components/Page/Page';
import Button from './components/Button/Button';
import classes from './App.module.scss';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className={classes['container']}>
      <Page>
        <Wrapper>
          <h1>Welcome to Helping Each Other Uttoxeter</h1>
          <Button ariaLabel={'Hello'} disabled={false}>
            Button 1
          </Button>
          <Button ariaLabel={'Hello2'} disabled={false} variant='secondary'>
            Button 2
          </Button>
        </Wrapper>
      </Page>
    </div>
  );
}

export default App;
