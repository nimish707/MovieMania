import React from 'react'
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import NotFound from './Screens/NotFound';
import HomeScreen from './Screens/HomeScreen';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import MoviesPage from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';
import SideBar from './Screens/Dashboard/SideBar';
import Aos from 'aos';
import Password from './Screens/Dashboard/Password';
import FavouriteMovies from './Screens/Dashboard/FavouriteMovies';
import MoviesList from './Screens/Dashboard/Admin/MoviesList';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import Plan from './Screens/Plan';
import Payement from './Screens/payement';

function App() {
Aos.init();
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<Password />} />
      <Route path="/favourites" element={<FavouriteMovies />} />
      <Route path="/moviesList" element={<MoviesList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/plan" element={<Plan/>} />
      <Route path="/payement" element={<Payement/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
  );
}

export default App
