import Headersection from './components/LayerComponent';
import BannerSection from './components/BaseComponents/header';
import Footer from './components/BaseComponents/footer';
import VideoBanner from './components/BaseComponents/Banner';
import Maincontent from './components/BaseComponents/Maincontent';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">    
      <Headersection />
      <BannerSection/>
      <VideoBanner />
      <Maincontent />
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;


