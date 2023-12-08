import classes from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import BookClub from './pages/BookClub/BookClub';
import GardenClub from './pages/GardenClub/GardenClub';
import Events from './pages/Events/Events';
import ContactUs from './pages/ContactUs/ContactUs';
import WeeklyMeetup from './pages/WeeklyMeetup/WeeklyMeetup';

function App() {
  return (
    <div className={classes['container']}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/weekly-meetup' element={<WeeklyMeetup />}></Route>
        <Route path='/book-club' element={<BookClub />}></Route>
        <Route path='/garden-club' element={<GardenClub />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
