import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import NFTDetails from './pages/NFTDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="nft/:id" element={<NFTDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
