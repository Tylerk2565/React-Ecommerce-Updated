import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/Home';
import InventoryPage from './pages/Inventory';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/> 
      </Router>
    </>
  );
}

export default App;
