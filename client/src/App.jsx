import classes from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import BookClub from './pages/BookClub/BookClub';
import GardenClub from './pages/GardenClub/GardenClub';
import SwimmingClub from './pages/SwimmingClub/SwimmingClub';
import DinnerNights from './pages/DinnerNights/DinnerNights';
import ContactUs from './pages/ContactUs/ContactUs';
import WeeklyMeetups from './pages/WeeklyMeetups/WeeklyMeetups';

function App() {
  return (
    <div className={classes['container']}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/weekly-meetups' element={<WeeklyMeetups />}></Route>
        <Route path='/book-club' element={<BookClub />}></Route>
        <Route path='/garden-club' element={<GardenClub />}></Route>
        <Route path='/swimming-club' element={<SwimmingClub />}></Route>
        <Route path='/dinner-nights' element={<DinnerNights />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
