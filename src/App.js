import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Card from './components/Card/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import MainWrapper from './components/MainWrapper';
import About from './pages/About';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Error404 from './pages/Error404';
import Main from './pages/Main';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <Banner />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog.html" element={<Catalog />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contacts.html" element={<Contacts />} />
          <Route path='/catalog/:id.html' element={<Card />} />
          <Route path='/cart.html' element={<Cart />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
