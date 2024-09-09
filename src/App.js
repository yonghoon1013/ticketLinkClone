import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <TopBanner />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
