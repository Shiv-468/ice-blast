import './App.css';
import Hero from './components/Hero';
import FutureClean from './components/FutureClean';
import Blasting from './components/Blasting';
import EffectiveClean from './components/EffectiveClean';
import BlastingService from './components/BlastingService';
import TalkNumbers from './components/TalkNumbers';
import LatestWork from './components/LatestWork';
import Footer from './components/Footer';
import { News } from './components/News';
function App() {
  return (
    <>
      <Hero />
      <FutureClean />
      <Blasting />
      <EffectiveClean />
      <BlastingService />
      <TalkNumbers />
      <LatestWork />
      <News/>
      <Footer/>
    </>
  );
}

export default App;
