import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Fotky from './components/Gallery/Fotky';
import Navbar from './components/Navbar/Navbar';
import PlaceTime from './components/PlaceTime/PlaceTime';
import Timeline from './components/TimelineCwo/TimelineCwo';

function App() {
  return (
    <div className='cwo'>
      <Navbar />
      <Banner />
      <About />
      <Categories />
      <PlaceTime />
      <Timeline />
      <Fotky />
      <Footer />
    </div>
  );
}

export default App;
