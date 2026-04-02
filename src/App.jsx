import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <Navbar />

      <div style={{ flex: 1, paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page3" element={<PageThree />} />
          <Route path="/page4" element={<PageFour />} />
          <Route path="/page5" element={<PageFive />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;