import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'
import PageOne from './pages/PageOne';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <Navbar />

      <div style={{ flex: 1, paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<PageOne />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;