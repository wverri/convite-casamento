import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import ConfirmationForm from './components/ConfirmationForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Countdown />
      <EventDetails />
      <Location />
      <Gallery />
      <ConfirmationForm />
      <Footer />
    </div>
  );
}

export default App; 