import classes from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import BookClub from './pages/BookClub/BookClub';
import GardenClub from './pages/GardenClub/GardenClub';

function App() {
  return (
    <div className={classes['container']}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/book-club' element={<BookClub />}></Route>
        <Route path='/garden-club' element={<GardenClub />}></Route>
      </Routes>
    </div>
  );
}

export default App;
